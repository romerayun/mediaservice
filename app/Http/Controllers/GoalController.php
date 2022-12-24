<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGoal;
use App\Models\ClaimFile;
use App\Models\Goal;
use App\Models\GoalFile;
use App\Models\Group;
use App\Models\TemporaryFile;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class GoalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        expiredGoal();

        $startDate = date('Y-m-d H:i:s');
        $currentDate = date('Y-m-d 23:59:59');

        $todayGoals = Goal::where('user_id', Auth::user()->id)
            ->whereBetween('deadline', [$startDate, $currentDate])
            ->whereIn('status', array(0))
            ->orderBy('deadline', 'asc')
            ->get();

        $tomorrowGoals = Goal::where('user_id', Auth::user()->id)
            ->whereBetween('deadline', [date('Y-m-d 00:00:00', strtotime("+1 day")), date('Y-m-d 23:59:59', strtotime("+1 day"))])
            ->whereIn('status', array(0))
            ->orderBy('deadline', 'asc')
            ->get();

        $otherGoals = Goal::where('user_id', Auth::user()->id)
            ->where('deadline', '>=', date('Y-m-d 00:00:00', strtotime("+2 day")))
            ->whereIn('status', array(0))
            ->orderBy('deadline', 'asc')
            ->get();

        $completeGoals = Goal::where('user_id', Auth::user()->id)
            ->where('status', 1)
            ->orderBy('deadline', 'asc')
            ->get();

        return view('goals.index', compact('todayGoals', 'tomorrowGoals', 'otherGoals', 'completeGoals'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $groups = Group::all();
        return view('goals.create', compact('groups'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'text' => 'required',
                'user_id' => 'nullable|integer',
            ],
            [
                'text.required' => 'Поле описание не может быть пустым',
                'user_id.integer' => 'Выберите значение из списка',
            ]
        );
        $request->merge([
            'exposed' => Auth::user()->id,
        ]);
        if ($request->isMySelf == 1) {
            $request->merge([
                'user_id' => Auth::user()->id,
            ]);
        }

        if ($request->rrule == '') {
            $request->merge([
                'rrule' => null,
            ]);
        }

        DB::beginTransaction();
        try {
            $goal = Goal::create($request->all());
            $goal_id = $goal->id;

            if ($request->filepond) {
                if (count($request->filepond) != 0) {
                    $files = $request->file('filepond');

                    foreach ($files as $file) {

                        $filename = $file->getClientOriginalName();
                        $folder = uniqid() . '-' . now()->timestamp;

                        $file->storeAs('goals/' . $folder, $filename);

                        $goalFile = GoalFile::create([
                            'goal_id' => $goal_id,
                            'file' => 'goals/' . $folder . '/' . $filename,
                        ]);

                    }
                }
            }

            DB::commit();
            return response()->json([
                'goal' => $goal,
                'user' => $goal->exposed_user->getFullName(),
            ]);
        } catch (\Exception $exception) {
            DB::rollback();
            return $exception;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function deadline()
    {
        $goals = Goal::where('deadline', '<', date('Y-m-d H:i:s'))
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->orderBy('id', 'desc')
            ->get();
        return view('goals.expired', compact('goals'));
    }

    public function complete($id)
    {
        $goal = Goal::firstWhere('id', $id);
        if (!$goal) {
            return response()->json([
                'error' => 'Задача не найдена'
            ], 404);
        }
        $goal->status = 1;
        $goal->save();
        return response()->json('Задача успешно обновлена');
    }

    public function send()
    {
        $goals = Goal::where('exposed', \Illuminate\Support\Facades\Auth::user()->id)
            ->where('user_id', '<>', \Illuminate\Support\Facades\Auth::user()->id)
            ->orderBy('id', 'desc')
            ->get();

        return view('goals.send', compact('goals'));
    }

    public function repeatGoal($id, Request $request)
    {

        $goal = Goal::where('id', $id)->get()->first();
        $goal->isRepeat = 1;
        $goal->save();

        DB::beginTransaction();

        try {

            $newGoal = new Goal();


            $newGoal->text = $goal->text;
            $newGoal->exposed = $goal->exposed;
            $newGoal->user_id = $goal->user_id;
            $newGoal->client_id = $goal->client_id;
            $newGoal->isRead = 0;
            $newGoal->isReadExpired = 0;
            $newGoal->status = 0;
            $newGoal->deadline = now()->addDay(1);

            $newGoal->save();
            DB::commit();

            $request->session()->flash('success', 'Задача создана повторно 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При создании задачи произошла ошибка 😢');
            return back();
        }

    }
}
