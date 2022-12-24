<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\StoreUser;
use App\Mail\TestMail;
use App\Mail\UserRegistration;
use App\Models\Claim;
use App\Models\Role;
use App\Models\SalesPlan;
use App\Models\UserM;
use http\Client\Curl\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserController extends Controller
{

    public function login()
    {
        return view('users.login');
    }

    public function auth(LoginRequest $request)
    {

        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
        ])) {
            return redirect()->route('home');
        }

        return redirect()->back()->with('error', "Неверный логин или пароль!");

    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('users.login');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = UserM::all();
        return view('users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::all();
        return view('users.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUser $request)
    {
        DB::beginTransaction();
        $data = [];
        try {
            $email = $request->email;
            $password = Str::random(8);
            $params = [
                'email' => $email,
                'password' => $password,
            ];
            $request->merge(['password' => Hash::make($password)]);

            $user = UserM::create($request->all());
            DB::commit();

            if ($request->hasFile('photo')) {
                $folder = date("Y-m-d");
                $data['photo'] = $request->file('photo')->store("images/{$folder}");
                $user->photo = $data['photo'];
                $user->save();
                DB::commit();
            }

            Mail::to($email)->send(new UserRegistration($params));

            $request->session()->flash('success', 'Данные успешно добавлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢' . $exception);
            return back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        $start = date('Y-m-00') . ' 00:00:00';
        $end = date('Y-m-32') . ' 00:00:00';
        $planMonth = date('Y-m-01');

        if ($request->input('month')) {
            $start = $request->input('month') . '-00 00:00:00';
            $end = $request->input('month') . '-32 00:00:00';
            $planMonth = $request->input('month') . '-01';
        }

        $sumPlan = SalesPlan::orderBy('month', 'desc')
            ->where('month', $planMonth)
            ->where('user_id', $id)
            ->sum('plan');

        $sumClaims = DB::table('claims')
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->whereNotNull('creator')
            ->where('creator', $id)
            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->get();

        $sumPaid = Claim::with('historiesPayment')
            ->whereHas('historiesPayment', function ($q) use ($start, $end) {
                $q->where('created_at', '>=', $start)
                    ->where('created_at', '<=', $end)
                    ->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Оплачен");
                    });
            })
            ->where('creator', $id)
            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->get();

        $userClaims = Claim::where('creator', $id)
            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->get();

        $user = UserM::firstWhere('id', $id);


        return view('users.show', compact('userClaims', 'user', 'sumPlan', 'sumClaims', 'sumPaid', 'id'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $roles = Role::all();
        $user = UserM::firstWhere('id', $id);
        return view('users.edit', compact('roles'))->with('user', $user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreUser $request, $id)
    {
        $userOld = UserM::firstWhere('id', $id);
        $sendEmail = false;
        DB::beginTransaction();
        $data = [];
        try {
            if ($userOld->email != $request->email) {
                $email = $request->email;
                $password = Str::random(8);
                $params = [
                    'email' => $email,
                    'password' => $password,
                ];
                $request->merge(['password' => Hash::make($password)]);
                $sendEmail = true;
            }

            $userOld->update($request->all());
            DB::commit();

            if ($request->hasFile('photo')) {
                if ($userOld->photo) {
                    Storage::delete($userOld->logo);
                }
                $folder = date("Y-m-d");
                $data['photo'] = $request->file('photo')->store("images/{$folder}");
                $userOld->photo = $data['photo'];
                $userOld->save();
                DB::commit();
            }

            if ($sendEmail) Mail::to($email)->send(new UserRegistration($params));

            $request->session()->flash('success', 'Данные успешно добавлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢' . $exception);
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = UserM::find($id);
        $user->delete();
        return redirect()->route('users.index')->with('success', 'Данные успешно удалены 👍');
    }


    public function getClaimsPayment(Request $request)
    {

        $start = date('Y-m-00') . ' 00:00:00';
        $end = date('Y-m-32') . ' 00:00:00';
        $planMonth = date('Y-m-01');
        $id = $request->input('id');

        if ($request->input('month')) {
            $start = $request->input('month') . '-00 00:00:00';
            $end = $request->input('month') . '-32 00:00:00';
            $planMonth = $request->input('month') . '-01';
        }


        $sumPlan = SalesPlan::orderBy('month', 'desc')
            ->where('month', $planMonth)
            ->where('user_id', $id)
            ->sum('plan');

        $sumClaims = DB::table('claims')
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->whereNotNull('creator')
            ->where('creator', $id)
            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->get();

        $sumPaid = Claim::with('historiesPayment')
            ->whereHas('historiesPayment', function ($q) use ($start, $end) {
                $q->where('created_at', '>=', $start)
                    ->where('created_at', '<=', $end)
                    ->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Оплачен");
                    });
            })
            ->where('creator', $id)
            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->get();


//        $paidClaims = Claim::with('historiesPayment')
//            ->whereHas('historiesPayment', function ($q) use ($start, $end) {
//                $q->where('created_at', '>=', $start)
//                    ->where('created_at', '<=', $end)
//                    ->with('status')
//                    ->whereHas('status', function ($w) {
//                        $w->where('name', "Оплачен");
//                    });
//            })
//            ->select('creator', DB::raw('SUM(amount) as total_amount'))
//            ->groupBy('creator')
//            ->get();
//
//        $fio = $paidClaims->mapWithKeys(function ($item, $key) {
//            return [$key => $item->creatorUser->getFullName()];
//        });
//
//        $multipliedPaidClaims = $paidClaims->mapWithKeys(function ($item, $key) {
//            return [$key => $item->total_amount];
//        });

        if (!$sumClaims->first()->total_amount) {
            $sumClaims = 0;
        } else {
            $sumClaims = $sumClaims->first()->total_amount;
        }

        if (!$sumPaid->first()->total_amount) {
            $sumPaid = 0;
        } else {
            $sumPaid = $sumPaid->first()->total_amount;
        }

        $res = array(
            'paid' => array($sumPaid),
            'plan' => array($sumPlan),
            'claims' => array($sumClaims),
        );

//        $res = array($sumPlan, $sumPaid, $sumClaims);

        return json_encode($res);
    }
}
