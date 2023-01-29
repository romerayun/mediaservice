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

            $claims = Claim::with('historiesPayment.status')
                ->whereDoesntHave('historiesPayment.status', function ($q) {
                    $q->where('name', "Оплачен");
                })
                ->where('notInclude',0)
                ->orderBy('created_at', 'desc')
                ->get();


            $statusesPayment = StatusPayment::all();

            return view('payment.index', compact('claims', 'statusesPayment'));
        } else {
            abort(403);
        }
    }

    public function storeStatus(Request $request) {

        $claim = Claim::find($request->claim_id);

        if ($request->amount == null) {
            $amount = 0;
        } else {
            $amount = str_replace(' ', '', $request->amount);
            $sum = getPaymentsClaim($request->claim_id);
            if ($claim->amount == ($sum + $amount)) {

                $status = StatusPayment::where("name", 'Оплачен')->get();

                $request->merge([
                   'status_id' => $status->first()->id,
                   'amount' => '0',
                    'user_id' => Auth::user()->id,
                ]);

                HistoryPayment::create($request->all());
                return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
            }

        }

        $request->merge([
            'amount' => $amount
        ]);

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
            ->where('notInclude',0)
            ->orderBy('created_at', 'desc')
            ->get();

        $statusesPayment = StatusPayment::all();

        return view('payment.paid', compact('claims', 'statusesPayment'));
    }

    public function paidListClaims($id) {

        $historiesPaidClaims = HistoryPayment::where('claim_id', $id)
            ->orderBy('created_at', 'desc')
            ->get();

        return view('payment.paid-claims', compact('historiesPaidClaims'));
    }

    public function deletePaidClaims($id) {
        $hp = HistoryPayment::find($id);
        $hp->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }
}
