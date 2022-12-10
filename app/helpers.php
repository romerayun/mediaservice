<?php

use App\Models\Claim;
use Illuminate\Support\Facades\Auth;

if (!function_exists('getAllGoals')) {
    function getAllGoals()
    {
        $goals = \App\Models\Goal::all();
        return $goals;
    }
}

if (!function_exists('getCountGoals')) {
    function getCountGoals()
    {
        $goals = \App\Models\Goal::where('isRead', 0)->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)->count();
        return $goals;
    }
}

if (!function_exists('goalsIsRead')) {
    function goalsIsRead()
    {
        \App\Models\Goal::where('isRead', 0)
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->update(['isRead' => 1]);
    }
}

if (!function_exists('expiredGoal')) {
    function expiredGoal()
    {
        \App\Models\Goal::where('deadline', '<', date('Y-m-d H:i:s'))
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->where('status', '=', 0)
            ->update(['status' => 2]);
    }
}

if (!function_exists('countExpiredGoal')) {
    function countExpiredGoal()
    {
        $count = \App\Models\Goal::where('status', 2)
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
//            ->where('isReadExpired', '=', '0')
            ->count();
        return $count;
    }
}

if (!function_exists('goalsIsReadExpired')) {
    function goalsIsReadExpired()
    {
        \App\Models\Goal::where('isReadExpired', 0)
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->where('status', '=', 2)
            ->update(['isReadExpired' => 1]);
    }
}

if (!function_exists('getCountClaimsResponsible')) {
    function getCountClaimsResponsible()
    {
        return \App\Models\Service::where('user_id', \Illuminate\Support\Facades\Auth::user()->id)->count();
    }
}

if (!function_exists('getCountClaimsResponsibleIsNotRead')) {
    function getCountClaimsResponsibleIsNotRead()
    {
        return \App\Models\Claim::where('isRead', '=', 0)
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('user_id', \Illuminate\Support\Facades\Auth::user()->id);
            })->count();
    }
}

if (!function_exists('getCountClaimsGroupIsNotRead')) {
    function getCountClaimsGroupIsNotRead()
    {
        return \App\Models\Claim::where('isRead', '=', 0)
            ->whereNull('user_id')
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('group_id', Auth::user()->role->group_id);
            })->count();
    }
}


if (!function_exists('claimsIsRead')) {
    function claimsIsRead()
    {
        $services = \App\Models\Service::where('user_id', \Illuminate\Support\Facades\Auth::user()->id)->get();
        if ($services) {
            foreach ($services as $service) {
                if ($service->claims) {
                    foreach ($service->claims as $claim) {
                        $claim->isRead = 1;
                        $claim->save();
                    }
                }
            }
        }

    }
}

if (!function_exists('claimsGroupIsRead')) {
    function claimsGroupIsRead()
    {
        $services = \App\Models\Service::where('group_id', \Illuminate\Support\Facades\Auth::user()->role->group_id)->get();
        if ($services) {
            foreach ($services as $service) {
                if ($service->claims) {
                    foreach ($service->claims as $claim) {
                        if ($claim->user_id == null) {
                            $claim->isRead = 1;
                            $claim->save();
                        }
                    }
                }
            }
        }

    }
}

if (!function_exists('myClaimsIsNotClosed')) {
    function myClaimsIsNotClosed()
    {
        return Claim::where('user_id', Auth::user()->id)
            ->where('isClose', 0)->count();

    }
}

if (!function_exists('myClaimsIsClosed')) {
    function myClaimsIsClosed()
    {
        return Claim::where('user_id', Auth::user()->id)
            ->where('isClose', 1)->count();

    }
}

if (!function_exists('claimsAdds')) {
    function claimsAdds($claim)
    {
        $claims = array();

        if ($claim->service->isRequiredMaterial) $claims[] = 'Материалы';
        if ($claim->service->isPackage) $claims[] = 'Пакеты услуг';
        if ($claim->service->isPeriod)  $claims[] = 'Период размещения';
        if ($claim->service->isBrif)  $claims[] = 'Бриф';
        if ($claim->service->isOutput)  $claims[] = 'Количество выходов';
        if ($claim->isInvoice)  $claims[] = 'Счет';

        return $claims;
    }
}

if (!function_exists('getCountCompleteInvoice')) {
    function getCountCompleteInvoice()
    {
        return \App\Models\Claim::where('isInvoice', 1)
            ->whereNotNull('invoice')->count();
    }
}

if (!function_exists('getCountNotCompleteInvoice')) {
    function getCountNotCompleteInvoice()
    {
        return \App\Models\Claim::where('isInvoice', 1)
            ->whereNull('invoice')->count();
    }
}


if (!function_exists('createZip')) {
    function createZip($files)
    {
//        $zip = new \ZipArchive();
//
//        $fileName = 'files.zip';
//        $res = $zip->open((storage_path() . $fileName), ZipArchive::CREATE | \ZipArchive::OVERWRITE);
//        dd($res);
//
//        if ($res === TRUE)
//        {
//            foreach ($files as $key => $value) {
//                $zip->addFile(storage_path($value->file), $value->file);
//            }
//
//            $zip->close();
//        }
//
//        return response()->download(public_path($fileName));

    }
}



