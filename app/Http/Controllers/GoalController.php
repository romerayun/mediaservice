<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGoal;
use App\Models\Goal;
use App\Models\Group;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
            ->whereIn('status', array(0,1))
            ->orderBy('deadline', 'asc')
            ->get();

        $tomorrowGoals = Goal::where('user_id', Auth::user()->id)
            ->whereBetween('deadline', [date('Y-m-d 00:00:00', strtotime("+1 day")), date('Y-m-d 23:59:59', strtotime("+1 day"))])
            ->whereIn('status', array(0,1))
            ->orderBy('deadline', 'asc')
            ->get();

        $otherGoals = Goal::where('user_id', Auth::user()->id)
            ->where('deadline', '>=', date('Y-m-d 00:00:00', strtotime("+2 day")))
            ->whereIn('status', array(0,1))
            ->orderBy('deadline', 'asc')
            ->get();

        return view('goals.index', compact('todayGoals', 'tomorrowGoals', 'otherGoals'));
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
    public function store(StoreGoal $request)
    {
        $request->merge([
            'exposed' => Auth::user()->id,
        ]);

        if ($request->isMySelf == 1) {
            $request->merge([
                'user_id' => Auth::user()->id,
            ]);
        }

        DB::beginTransaction();

        try {

            Goal::create($request->all());
            DB::commit();

            $request->session()->flash('success', 'Данные успешно добавлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢');
            return back();
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
        $goal->status = 1;
        $goal->save();
        return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
    }

    public function send()
    {
        $goals = Goal::where('exposed', \Illuminate\Support\Facades\Auth::user()->id)
            ->where('user_id', '<>' , \Illuminate\Support\Facades\Auth::user()->id)
            ->orderBy('id', 'desc')
            ->get();

        return view('goals.send', compact('goals'));
    }

}
