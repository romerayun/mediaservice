<?php

namespace App\Http\Controllers;

use App\Models\Claim;
use App\Models\HistoryPayment;
use App\Models\StatusPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
    public function index() {

        if (Auth::user()->role->level <= 2 || Auth::user()->role->level == 6) {

            $claims = Claim::where('isClose', 0)
                ->with('historiesPayment.status')
                ->whereDoesntHave('historiesPayment.status', function ($q) {
                    $q->where('name', "Оплачен");
                })
                ->orderBy('created_at', 'desc')
                ->get();


            $statusesPayment = StatusPayment::all();

            return view('payment.index', compact('claims', 'statusesPayment'));
        } else {
            abort(403);
        }
    }

    public function storeStatus(Request $request) {
        $validatedData = $request->validate(
            [
                'status_id' => 'required|integer',
            ],
            [
                'status_id.required' => 'Выберите значение из списка',
                'status_id.integer' => 'Выберите значение из списка',
            ]
        );

        DB::beginTransaction();

        try {
            $request->merge([
                'user_id' => Auth::user()->id,
            ]);

            HistoryPayment::create($request->all());

            DB::commit();

            return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При обновлении статуса оплаты произошла ошибка 😢');
            return back();
        }
    }

    public function paid() {

        $claims = Claim::with('historiesPayment.status')
            ->whereHas('historiesPayment.status', function ($q) {
                $q->where('name', "Оплачен");
            })
            ->orderBy('created_at', 'desc')
            ->get();

        $statusesPayment = StatusPayment::all();

        return view('payment.paid', compact('claims', 'statusesPayment'));
    }
}
