<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\StoreUser;
use App\Mail\TestMail;
use App\Mail\UserRegistration;
use App\Models\Category;
use App\Models\Claim;
use App\Models\Group;
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
            return redirect()->route('calendar.index');
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
        if (auth()->user()->role->level > 2 && auth()->user()->id != $id) {
            abort(403);
        }
        $ajaxMonth = date('Y-m');
        $start = date('Y-m-00') . ' 00:00:00';
        $end = date('Y-m-32') . ' 00:00:00';
        $planMonth = date('Y-m-01');

        if ($request->input('month')) {
            $start = $request->input('month') . '-00 00:00:00';
            $end = $request->input('month') . '-32 00:00:00';
            $planMonth = $request->input('month') . '-01';
            $ajaxMonth = $request->input('month');
        }

        $res = new Request();
        $res->merge([
            'month' => $ajaxMonth,
            'user_id' => $id
        ]);

        $salesByCategory = $this->getSalesByCategoryAjax($res);

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


        return view('users.show', compact('userClaims', 'user', 'sumPlan', 'sumClaims', 'sumPaid', 'id', 'salesByCategory'));
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

    public function getSalesByCategory () {
        $groups = Group::all();
        return view('users.sales', compact('groups'));
    }

    public function getSalesByCategoryAjax(Request $request) {

        $start = $request->month.'-00 00:00:00';
        $end = $request->month.'-32 00:00:00';
//        $start = '2022-12-00 00:00:00';
//        $end = '2022-12-32 00:00:00';
//        $request->user_id = 1;

        $categoriesAllSum = DB::table('categories')
            ->leftJoin('services', 'categories.id', '=', 'services.category_id')
            ->leftJoin('claims', 'services.id', '=', 'claims.service_id')
            ->leftJoin('history_payments', 'claims.id', '=', 'history_payments.claim_id')
            ->select('categories.id',
                'categories.name',
                DB::raw('sum(claims.amount) as claims_amount'))
            ->whereNull('categories.deleted_at')
            ->where('claims.created_at', '>=', $start)
            ->where('claims.created_at', '<=', $end)
            ->where('claims.creator', '=', $request->user_id)
            ->where('history_payments.status_id', '=', 4)
            ->groupBy('categories.id', 'categories.name')
            ->get();

        $categories = Category::all();

        $categoriesAllSum = $categoriesAllSum->mapWithKeys(function ($item, $key) {
            return [$item->id => $item];
        });

        $allData = array();
        foreach ($categories as $key => $category) {
            $i = $key+1;

            $allData[$i] = array('name' => $category->name);
            if (isset($categoriesAllSum[$category->id])) {
                $allData[$i]['sum'] = $categoriesAllSum[$category->id]->claims_amount;
            } else {
                $allData[$i]['sum'] = 0;
            }

            $claims = DB::table('categories')
                ->leftJoin('services', 'categories.id', '=', 'services.category_id')
                ->leftJoin('claims', 'services.id', '=', 'claims.service_id')
                ->leftJoin('history_payments', 'claims.id', '=', 'history_payments.claim_id')
                ->leftJoin('clients', 'clients.id', '=', 'claims.client_id')
                ->leftJoin('requisites_clients', 'clients.id', '=', 'requisites_clients.client_id')
                ->select(
                    'clients.name',
                    'requisites_clients.fullName',
                    'claims.amount',
                )
                ->whereNull('categories.deleted_at')
                ->where('categories.id', $category->id)
                ->where('claims.created_at', '>=', $start)
                ->where('claims.created_at', '<=', $end)
                ->where('claims.creator', '=', $request->user_id)
                ->where('history_payments.status_id', '=', 4)
                ->get();

            $allData[$i]['users'] = $claims;
        }

        $res = '';
        $res .= '<div class="col-12 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">Итого поступлений</h4>
                        <table class="table  table-hover datatables"><tr>';
        $res .= '<th></th>';
                    foreach ($allData as $item) {
                        $res .= '<th>' . $item['name'] . '</th>';
                    }
        $res .= '</tr>';

        $res .= '<tr>';
        $res .= '<td class="font-bold">Итого поступлений: </td>';
        foreach ($allData as $item) {
            $res .= '<td>' . money($item['sum']) . ' руб.</td>';
        }
        $res .= '</tr>';

        $res .= '<tr>';
        $res .= '<td class="font-bold">Доход: </td>';

        $allClaimsAmount = 0;
        $allSalary = 0;
        $bonus = 0;

        foreach ($allData as $item) {
            $allSalary += $item['sum'] * 0.15;
            $allClaimsAmount += $item['sum'];
            $res .= '<td>' . money($item['sum'] * 0.15) . ' руб.</td>';
        }

        $res .= '</tr>';

        $res .= '<tr>';
        $res .= '<td class="font-bold text-primary">Общий доход: </td>';
        $res .= '<td colspan="'.count($allData).'">' . money($allSalary) . ' руб.</td>';
        $res .= '</tr>';

        if ($allClaimsAmount < 200000) $bonus = 0;
        else if ($allClaimsAmount < 300000) $bonus = $allClaimsAmount * 0.01;
        else if ($allClaimsAmount < 500000) $bonus = $allClaimsAmount * 0.02;
        else if ($allClaimsAmount < 1000000) $bonus = $allClaimsAmount * 0.03;
        else if ($allClaimsAmount < 3000000) $bonus = $allClaimsAmount * 0.05;
        else $bonus = $allClaimsAmount * 0.06;

        $res .= '<tr>';
        $res .= '<td class="font-bold text-primary">Премия: </td>';
        $res .= '<td colspan="'.count($allData).'">' . money($bonus) . ' руб.</td>';
        $res .= '</tr>';

        $res .='  </table></div>
                </div>
            </div>
        </div>';



        foreach($allData as $item) {
        $res .= '<div class="col-12 col-md-6">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">'.$item['name'].'</h4>
                        <p class="text-primary"><b>Общая сумма: </b>'. money($item['sum']) . ' руб.</p>';
                        if(count($item['users']) == 0) {
                            $res .= '<p class="text-danger">В данной категории услуг продажи не найдены</p>';
                        }
                        else {
                            $res .= '<table class="table table-lg table-hover datatables">
                                <thead>
                                    <th>Клиент</th>
                                    <th>Юридическое лицо</th>
                                    <th>Сумма</th>
                                </thead>';
                            foreach($item['users'] as $user) {
                                $res .= "<tr>
                                        <td>" . $user->name ."</td>";

                                if ($user->fullName) {
                                    $res .= "<td>" . $user->fullName ."</td>";
                                } else {
                                    $res .= "<td class='text-danger'>Данные не заполнены</td>";
                                }

                                $res .= "<td>" . money($user->amount) ." руб.</td>
                                    </tr>";
                            }
                            $res .= '</table>';
                        }

             $res .='  </div>
                </div>
            </div>
        </div>';
        }

        return $res;
    }


}
