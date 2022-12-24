<?php

namespace App\Http\Controllers;

use App\Models\Claim;
use App\Models\Group;
use App\Models\SalesPlan;
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
        return view('plan.create', compact('groups'));

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
        $plan = SalesPlan::firstWhere('id', $id);
        $groups = Group::all();
        $users = UserM::all();
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

        $start = date('Y-m-00') . ' 00:00:00';
        $end = date('Y-m-32') . ' 00:00:00';
        $planMonth = date('Y-m-01');

        if ($request->input('month')) {
            $start = $request->input('month').'-00 00:00:00';
            $end = $request->input('month').'-32 00:00:00';
            $planMonth = $request->input('month').'-01';
        }

        $sumPlan = SalesPlan::orderBy('month', 'desc')
            ->where('month', $planMonth)
            ->sum('plan');

        $sumClaims = DB::table('claims')
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->whereNotNull('creator')
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
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->get();

        $usersClaims = DB::table('claims')
            ->select('creator', DB::raw('SUM(amount) as total_amount'))
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
            ->select('creator', DB::raw('SUM(amount) as total_amount'))
            ->groupBy('creator')
            ->get();

        $multipliedPaidClaims = $paidClaims->mapWithKeys(function ($item, $key) {
            return [$item->creator => $item];
        });


        $salesPlan = SalesPlan::orderBy('month', 'desc')
            ->where('month', $planMonth)
            ->get();


        return view('plan.statistics', compact('multiplied', 'salesPlan', 'multipliedPaidClaims', 'sumPlan', 'sumClaims', 'sumPaid'));
    }


    public function remoteData(Request $request)
    {
        $start = date('Y-m-00') . ' 00:00:00';
        $end = date('Y-m-32') . ' 00:00:00';

        if ($request->input('month')) {
            $start = $request->input('month').'-00 00:00:00';
            $end = $request->input('month').'-32 00:00:00';
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




}
