<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Claim;
use App\Models\Group;
use App\Models\HistoryPayment;
use App\Models\SalesPlan;
use App\Models\Service;
use App\Models\UserM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Yajra\DataTables\Facades\DataTables;

class SalesPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $salesPlan = SalesPlan::orderBy('month', 'desc')->get();
//        where('month', date('Y-m-01'))
//            ->get();

        return view('plan.index', compact('salesPlan'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $groups = Group::all();
        $users = Group::with('roles.users')
            ->where('name', 'Отдел продаж')
            ->get();

//        dd($users);
        return view('plan.create', compact('groups', 'users'));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate(
            [
                'user_id' => 'required|integer',
                'month' => [
                    'required',
                    'date',
                    Rule::unique('sales_plans')
                        ->where('user_id', $request->user_id)
                        ->whereNull('deleted_at')
                ],
                'plan' => 'required|numeric',
            ],
            [
                'user_id.required' => 'Выберите значение из списка',
                'user_id.integer' => 'Выберите значение из списка',
                'month.required' => 'Поле месяц не может быть пустым',
                'month.date' => 'Поле месяц должно быть в формате даты',
                'month.unique' => 'План для данного сотрудника в этот месяц установлен',
                'plan.required' => 'Поле план продаж не может быть пустым',
                'plan.numeric' => 'Поле план продаж должно быть формате числа',
            ]
        );

        DB::beginTransaction();
        try {
            SalesPlan::create($request->all());
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
        abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $plan = SalesPlan::firstWhere('id', $id);
        $groups = Group::all();
        $users = UserM::where('isBlocked', 0)->get();
        return view('plan.edit', compact('plan', 'users', 'groups'));
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
        $validatedData = $request->validate(
            [
                'user_id' => 'required|integer',
                'month' => [
                    'required',
                    'date',
                    Rule::unique('sales_plans')
                        ->where('user_id', $request->user_id)
                        ->whereNull('deleted_at')
                        ->whereNot('id', $id)
                ],
                'plan' => 'required|numeric',
            ],
            [
                'user_id.required' => 'Выберите значение из списка',
                'user_id.integer' => 'Выберите значение из списка',
                'month.required' => 'Поле месяц не может быть пустым',
                'month.date' => 'Поле месяц должно быть в формате даты',
                'month.unique' => 'План для данного сотрудника в этот месяц установлен',
                'plan.required' => 'Поле план продаж не может быть пустым',
                'plan.numeric' => 'Поле план продаж должно быть формате числа',
            ]
        );

        $plan = SalesPlan::firstWhere('id', $id);
        $plan->update($request->all());
        return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $salesPlan = SalesPlan::find($id);
        $salesPlan->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }

    public function statistics(Request $request)
    {

        $start = date('Y-m-01') . ' 00:00:00';
        $end = date('Y-m-31') . ' 23:59:59';
        $planMonth = date('Y-m-01');

        if ($request->input('month')) {
            $start = $request->input('month').'-01 00:00:00';
            $end = $request->input('month').'-31 23:59:59';
            $planMonth = $request->input('month').'-01';
        }

        $sumPlan = SalesPlan::orderBy('month', 'desc')
            ->where('month', $planMonth)
            ->sum('plan');

        $sumClaims = DB::table('claims')
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->whereNotNull('creator')
            ->where('notInclude',0)
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
            ->where('notInclude',0)
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->get();

//        $sumPartsPaid = Claim::with('historiesPayment')
//            ->whereHas('historiesPayment', function ($q) use ($start, $end) {

        // Частично оплаченные заявки
        $sumPartsPaid = HistoryPayment::where('created_at', '>=', $start)
                    ->where('created_at', '<=', $end)
                    ->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Частично оплачен");
                    })
            ->groupBy('claim_id')
            ->select(DB::raw('claim_id, SUM(amount) as total_amount'))
            ->get();

        /** Удаление оплаченных заявок */
        $resultSumPartsPaidClaims = 0;
        if (count($sumPartsPaid) != 0) {
            foreach ($sumPartsPaid as $key => $part) {
                foreach ($part->claim->historiesPayment as $history) {
                    if ($history->status->name == 'Оплачен') {
                        unset($sumPartsPaid[$key]);
                    }
                }
            }
        }

        $usersParts = [];

        /** Подсчет общей суммы и распределение по сотрудникам */
        if (count($sumPartsPaid) != 0) {
            foreach ($sumPartsPaid as $key => $part) {
                $resultSumPartsPaidClaims += $part->total_amount;
                if (isset($usersParts[$part->claim->creator])) {
                    $usersParts[$part->claim->creator] += $part->total_amount;
                } else {
                    $usersParts[$part->claim->creator] = $part->total_amount;
                }

            }
        }


//        dd($usersParts);



        $usersClaims = DB::table('claims')
            ->select('creator', DB::raw('SUM(amount) as total_amount'))
            ->where('notInclude',0)
            ->whereNotNull('creator')
            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->groupBy('creator')
            ->get();

        $multiplied = $usersClaims->mapWithKeys(function ($item, $key) {
            return [$item->creator => $item];
        });



        $paidClaims = Claim::with('historiesPayment')
            ->whereHas('historiesPayment', function ($q) use ($start, $end) {
                $q->where('created_at', '>=', $start)
                    ->where('created_at', '<=', $end)
                    ->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Оплачен");
                    });
            })
            ->where('notInclude',0)
            ->select('creator', DB::raw('SUM(amount) as total_amount'))
            ->groupBy('creator')
            ->get();

        $multipliedPaidClaims = $paidClaims->mapWithKeys(function ($item, $key) {
            return [$item->creator => $item];
        });

//        dd($multipliedPaidClaims);


        $salesPlan = SalesPlan::orderBy('month', 'desc')
            ->where('month', $planMonth)
            ->get();


        return view('plan.statistics', compact('multiplied', 'salesPlan', 'multipliedPaidClaims', 'sumPlan', 'sumClaims',
            'sumPaid', 'resultSumPartsPaidClaims', 'usersParts'));
    }


    public function remoteData(Request $request)
    {
        $start = date('Y-m-01') . ' 00:00:00';
        $end = date('Y-m-31') . ' 23:59:59';

        if ($request->input('month')) {
            $start = $request->input('month').'-01 00:00:00';
            $end = $request->input('month').'-31 23:59:59';
        }


        $paidClaims = Claim::with('historiesPayment')
            ->whereHas('historiesPayment', function ($q) use ($start, $end) {
                $q->where('created_at', '>=', $start)
                    ->where('created_at', '<=', $end)
                    ->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Оплачен");
                    });
            })
            ->where('notInclude',0)
            ->select('creator', DB::raw('SUM(amount) as total_amount'))
            ->groupBy('creator')
            ->get();

        $fio = $paidClaims->mapWithKeys(function ($item, $key) {
            return [$key => $item->creatorUser->getFullName()];
        });

        $multipliedPaidClaims = $paidClaims->mapWithKeys(function ($item, $key) {
            return [$key => $item->total_amount];
        });

        $res = array(
            'labels' => $fio,
            'data' => $multipliedPaidClaims,
        );

        return json_encode($res);
    }

    public function services(Request $request)
    {

        $start = date('Y-m-01') . ' 00:00:00';
        $end = date('Y-m-31') . ' 23:59:59';

        if ($request->input('month')) {
            $start = $request->input('month').'-01 00:00:00';
            $end = $request->input('month').'-31 23:59:59';
        }
        $categories = Category::all();

        $categoriesAllSum = DB::table('categories')
            ->leftJoin('services', 'categories.id', '=', 'services.category_id')
            ->leftJoin('claims', 'services.id', '=', 'claims.service_id')
            ->leftJoin('history_payments', 'claims.id', '=', 'history_payments.claim_id')
            ->select('categories.id',
                'categories.name',
                DB::raw('sum(claims.amount) as claims_amount'))
            ->whereNull('categories.deleted_at')
//            ->where('claims.created_at', '>=', $start)
//            ->where('claims.created_at', '<=', $end)
            ->where('claims.notInclude',0)
            ->where('history_payments.status_id', '=', 4)
            ->where('history_payments.created_at', '>=', $start)
            ->where('history_payments.created_at', '<=', $end)
            ->groupBy('categories.id', 'categories.name')
            ->get();


        $categoriesAllSum = $categoriesAllSum->mapWithKeys(function ($item, $key) {
            return [$item->id => $item];
        });

        $usersSum = array();
        $allData = array();

        foreach ($categories as $key => $category) {

            $allData[$key] = array('name' => $category->name);
            if (isset($categoriesAllSum[$category->id])) {
                $allData[$key]['sum'] = $categoriesAllSum[$category->id]->claims_amount;
            } else {
                $allData[$key]['sum'] = 0;
            }

            $user = DB::table('categories')
                ->leftJoin('services', 'categories.id', '=', 'services.category_id')
                ->leftJoin('claims', 'services.id', '=', 'claims.service_id')
                ->leftJoin('history_payments', 'claims.id', '=', 'history_payments.claim_id')
                ->select('claims.creator',
                    DB::raw('sum(claims.amount) as claims_amount'))
                ->whereNull('categories.deleted_at')
                ->where('categories.id', $category->id)
//                ->where('claims.created_at', '>=', $start)
//                ->where('claims.created_at', '<=', $end)
                ->where('claims.notInclude',0)
                ->where('history_payments.status_id', '=', 4)
                ->where('history_payments.created_at', '>=', $start)
                ->where('history_payments.created_at', '<=', $end)
                ->groupBy('claims.creator')
                ->get();

            $allData[$key]['users'] = $user;
        }


        return view('plan.services', compact('categories', 'allData'));
    }


}
