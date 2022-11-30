<?php

if(!function_exists('getAllGoals')) {
    function getAllGoals() {
        $goals = \App\Models\Goal::all();
        return $goals;
    }
}

if(!function_exists('getCountGoals')) {
    function getCountGoals() {
        $goals = \App\Models\Goal::where('isRead', 0)->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)->count();
        return $goals;
    }
}

if(!function_exists('goalsIsRead')) {
    function goalsIsRead() {
        \App\Models\Goal::where('isRead', 0)
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->update(['isRead' => 1]);
    }
}

if(!function_exists('expiredGoal')) {
    function expiredGoal() {
        \App\Models\Goal::where('deadline', '<', date('Y-m-d H:i:s'))
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->where('status', '=', 0)
            ->update(['status' => 2]);
    }
}

if(!function_exists('countExpiredGoal')) {
    function countExpiredGoal() {
        $count = \App\Models\Goal::where('status', 2)
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->where('isReadExpired', '=', '0')
            ->count();
        return $count;
    }
}

if(!function_exists('goalsIsReadExpired')) {
    function goalsIsReadExpired() {
        \App\Models\Goal::where('isReadExpired', 0)
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->where('status', '=', 2)
            ->update(['isReadExpired' => 1]);
    }
}
