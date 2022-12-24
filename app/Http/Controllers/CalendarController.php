<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class CalendarController extends Controller
{
    public function index()
    {
        $groups = Group::all();

        return view('calendar.index', compact('groups'));
    }

    public function getGoals()
    {

        $goals = Goal::where('user_id', Auth::user()->id)->get();
        $events = array();

        foreach ($goals as $goal) {
            $editable = true;
            $duration = '';
            if ($goal->exposed != Auth::user()->id) $editable = false;
            if ($goal->rrule != '' && $goal->allDay == 0) {
//                diffInRealMilliseconds
                $sd = Carbon::createMidnightDate($goal->start_date);
                $ed = Carbon::createMidnightDate($goal->deadline);
                $duration = $ed->diffInRealMilliseconds($sd);
            }

            $events[] = [
                'id' => $goal->id,
                'title' => $goal->text,
                'start' => $goal->start_date,
                'end' => $goal->deadline,
                'backgroundColor' => $goal->color,
                'borderColor' => $goal->color,
                'display' => 'block',
                'exposed' => 'Создал задачу: ' . $goal->exposed_user->getFullName(),
                'allDay' => $goal->allDay,
                'duration' => ['milliseconds' => $duration],
                'rrule' => $goal->rrule,
                'editable' => $editable,
            ];
        }

        return json_encode($events);
    }

    public function getGoalById($id)
    {
        $goal = Goal::firstWhere('id', $id);
        $editable = true;

        if ($goal->exposed != Auth::user()->id) $editable = false;
        if ($goal->client_id == null) {
            $client = "Клиент не найден";
        } else {
            $client = $goal->client->name;
        }

        $countFiles = $goal->files->count();

        $event = [
            'id' => $goal->id,
            'title' => $goal->text,
            'start' => $goal->start_date,
            'end' => $goal->deadline,
            'backgroundColor' => $goal->color,
            'borderColor' => $goal->color,
            'display' => 'block',
            'exposed' => $goal->exposed_user->getFullName(),
            'user' => $goal->user->getFullName(),
            'client' => $client,
            'files' => $countFiles,
            'allDay' => $goal->allDay,
            'editable' => $editable,
            'status' => $goal->status
        ];


        return response()->json($event);
    }

    public function updateGoal($id, Request $request)
    {

        $goal = Goal::find($id);
        if (!$goal) {
            return response()->json([
                'error' => 'Задача не найдена'
            ], 404);
        }

        $goal->update([
            'start_date' => $request->start_date,
            'deadline' => $request->deadline,
        ]);

        return response()->json('Задача обновлена');
    }

    public function deleteGoal($id)
    {
        $goal = Goal::find($id);
        if (!$goal) {
            return response()->json([
                'error' => 'Задача не найдена 😢 Попробуйте перезагрузить страницу.'
            ], 404);
        } else if ($goal->exposed != Auth::user()->id) {
            return response()->json([
                'error' => 'Удаление задачи доступно только создателю задачи!'
            ], 403);
        }

        $goal->delete();
        return $id;
    }

}
