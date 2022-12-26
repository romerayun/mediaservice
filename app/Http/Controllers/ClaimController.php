<?php

namespace App\Http\Controllers;

use App\Models\ActiveAd;
use App\Models\Claim;
use App\Models\ClaimFile;
use App\Models\Goal;
use App\Models\HistoryClaim;
use App\Models\HistoryPayment;
use App\Models\StatusClaim;
use App\Models\StatusPayment;
use App\Models\TemporaryFile;
use App\Models\UserM;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use mysql_xdevapi\Exception;

class ClaimController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        abort(404);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        abort(404);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate(
            [
                'service_id' => 'required|integer',
                'deadlineClaim' => 'required|date',
                'amount' => 'numeric',
            ],
            [
                'service_id.integer' => 'Выберите значение из списка',
                'deadlineClaim.required' => 'Поле срок выполнения не может быть пустым',
                'deadlineClaim.date' => 'Поле срок выполения должен быть в формате даты',
                'amount.numeric' => 'Поле стоимость должно быть формате числа',
            ]
        );

        DB::beginTransaction();
        try {

            if ($request->package_id == '0') {
                $request->merge([
                    'package_id' => null,
                ]);
            }

            $request->merge([
                'deadline' => $request->deadlineClaim,
                'user_id' => null,
                'creator' => Auth::user()->id,
            ]);


            $claim = Claim::create($request->all());

            if ($request->hasFile('brif')) {
                $folder = date("Y-m-d");
                $brifFilepath = $request->file('brif')->store("images/{$folder}");

                $claim->brif = $brifFilepath;
                $claim->save();
            }

            $claimId = $claim->id;

            if ($request->filepond) {
                if (count($request->filepond) != 0) {

                    $folder = uniqid() . '-' . now()->timestamp;
                    Storage::disk('public')->makeDirectory('materials/' . $folder);

                    $oldFolders = array();
                    foreach ($request->filepond as $file) {
                        $claimFile = ClaimFile::create([
                            'claim_id' => $claimId,
                        ]);

                        $temporaryFile = TemporaryFile::where('folder', $file)->first();
                        if ($temporaryFile) {

                            $oldFile = 'materials/tmp/' . $file . '/' . $temporaryFile->filename;
                            $newFile = 'materials/' . $folder . '/' . $temporaryFile->filename;
                            Storage::copy($oldFile, $newFile);

                            $claimFile->file = $newFile;
                            $claimFile->save();
                        }

                        $temporaryFile->delete();

                        $oldFolders[] = $file;
                    }

                    foreach ($oldFolders as $folder) {
                        Storage::deleteDirectory('materials/tmp/' . $folder);
                    }

                }
            }

            $statusClaimId = StatusClaim::where('name', '=', 'Заявка создана')->get()->first()->id;
            HistoryClaim::create([
                'user_id' => Auth::user()->id,
                'status_id' => $statusClaimId,
                'comment' => 'Заявка создана',
                'claim_id' => $claimId,
            ]);

            $statusPayment = StatusPayment::where('name', '=', 'Не оплачен')->get()->first()->id;
            HistoryPayment::create([
                'user_id' => Auth::user()->id,
                'status_id' => $statusPayment,
                'comment' => 'Заявка не оплачена',
                'claim_id' => $claimId,
            ]);

            if ($request->isInvoice) {
                $statusPayment = StatusPayment::where('name', '=', 'Счет не выставлен')->get()->first()->id;
                HistoryPayment::create([
                    'user_id' => Auth::user()->id,
                    'status_id' => $statusPayment,
                    'comment' => 'Счет не выставлен',
                    'claim_id' => $claimId,
                ]);
            }

            DB::commit();
            $request->session()->flash('success', 'Заявка успешно создана 👍');
            return back();

        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При создании заявки произошла ошибка 😢');
            return back();
        }
//        dd($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $claim = Claim::find($id);
        $countAdds = claimsAdds($claim);
        $statusesClaim = StatusClaim::where('isVisible', 1)->get();
        $users = UserM::all();
        $activeAd = ActiveAd::firstWhere('claim_id', $id);
        return view('claims.show', compact('claim', 'countAdds', 'statusesClaim', 'users', 'activeAd'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        abort(404);
    }

    public function claimInputs()
    {
        abort(404);
    }

    public function claimDistribution() {
        $claims = Claim::whereNull('user_id')
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('user_id', \Illuminate\Support\Facades\Auth::user()->id);
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        claimsIsRead();

        $users = UserM::all();

        return view('claims.distribution', compact('claims', 'users'));
    }

    public function claimDistributionComplete() {
        $claims = Claim::whereNotNull('user_id')
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('user_id', \Illuminate\Support\Facades\Auth::user()->id);
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        $users = UserM::all();

        return view('claims.distribution-complete', compact('claims', 'users'));
    }

    public function claimUserUpdate($cliam, Request $request) {
        $validatedData = $request->validate(
            [
                'user_id' => 'required|integer',
            ],
            [
                'user_id.required' => 'Выберите значение из списка',
                'user_id.integer' => 'Выберите значение из списка',
            ]
        );

        DB::beginTransaction();

        try {
            $cliam = Claim::find($cliam);
            $cliam->user_id = $request->user_id;
            $cliam->save();
            DB::commit();

            $statusClaimId = StatusClaim::where('name', '=', 'Назначен ответственный')->get()->first()->id;
            HistoryClaim::create([
                'user_id' => Auth::user()->id,
                'status_id' => $statusClaimId,
                'comment' => 'Назначен ответственный за выполнение заявки',
                'claim_id' => $cliam->id,
            ]);

            $oldGoal = Goal::where('claim_id', $cliam->id);
            if ($oldGoal->count() != 0) {
                $oldGoal->delete();
            }

            $goal = new Goal;
            $goal->exposed = Auth::user()->id;
            $goal->user_id = $request->user_id;
            $goal->client_id = $cliam->client_id;
            $goal->claim_id = $cliam->id;
            $goal->text = "Заявка для выполенения - " . $cliam->service->name;
            $goal->start_date = Carbon::parse($cliam->created_at)->format('Y-m-d 00:00:00');
            $goal->deadline = Carbon::parse($cliam->deadline)->addDay()->format('Y-m-d 00:00:00');
            $goal->allDay = 1;
            $goal->save();


            DB::commit();

            return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При обновлении заявки произошла ошибка 😢' . $exception);
            return back();
        }
    }

    public function claimAccept($cliam, Request $request) {

        DB::beginTransaction();

        try {
            $cliam = Claim::find($cliam);
            $cliam->user_id = Auth::user()->id;
            $cliam->isRead = 1;
            $cliam->save();

            $statusClaimId = StatusClaim::where('name', '=', 'Назначен ответственный')->get()->first()->id;
            HistoryClaim::create([
                'user_id' => Auth::user()->id,
                'status_id' => $statusClaimId,
                'comment' => 'Принял для выполнения',
                'claim_id' => $cliam->id,
            ]);

            $oldGoal = Goal::where('claim_id', $cliam->id);
            if ($oldGoal->count() != 0) {
                $oldGoal->delete();
            }

            $goal = new Goal;
            $goal->exposed = Auth::user()->id;
            $goal->user_id = Auth::user()->id;
            $goal->client_id = $cliam->client_id;
            $goal->claim_id = $cliam->id;
            $goal->text = "Заявка для выполенения - " . $cliam->service->name;
            $goal->start_date = Carbon::parse($cliam->created_at)->format('Y-m-d 00:00:00');
            $goal->deadline = Carbon::parse($cliam->deadline)->addDay()->format('Y-m-d 00:00:00');
            $goal->allDay = 1;
            $goal->save();


            DB::commit();

            return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При обновлении заявки произошла ошибка 😢' . $exception);
            return back();
        }
    }


    public function storeHistory($id, Request $request) {
        $validatedData = $request->validate(
            [
                'status_id' => 'required|integer',
            ],
            [
                'status_id.required' => 'Выберите значение из списка',
                'status_id.integer' => 'Выберите значение из списка',
            ]
        );

        $request->merge([
            'claim_id' => $id,
            'user_id' => Auth::user()->id,
        ]);

        DB::beginTransaction();

        try {
            HistoryClaim::create($request->all());
            DB::commit();
            $request->session()->flash('success', 'Данные успешно добавлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢');
            return back();
        }


    }

    public function claimGroups() {

        $claims = Claim::whereNull('user_id')
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('group_id', Auth::user()->role->group_id);
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        $users = UserM::all();


        return view('claims.claim-group', compact('claims', 'users'));
    }

    public function claimsMy() {

        $claims = Claim::where('user_id', Auth::user()->id)
            ->where('isClose', 0)
            ->with('service')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        $users = UserM::all();

        return view('claims.claims-my', compact('claims', 'users'));
    }

    public function claimsClosed($id, Request $request) {
        $validatedData = $request->validate(
            [
                'commentClose' => 'required',
            ],
            [
                'commentClose.required' => 'Введите причину закрытия заявки',
            ]
        );

        DB::beginTransaction();

        try {
            $cliam = Claim::find($id);
            $cliam->isClose = 1;
            $cliam->commentClose = $request->commentClose;
            $cliam->save();

            $statusClaimId = StatusClaim::where('name', '=', 'Заявка закрыта')->get()->first()->id;
            HistoryClaim::create([
                'user_id' => Auth::user()->id,
                'status_id' => $statusClaimId,
                'comment' => $request->commentClose,
                'claim_id' => $cliam->id,
            ]);

            DB::commit();

            return redirect()->back()->with('success', 'Заявка успешно закрыта 👍');
        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При обновлении заявки произошла ошибка 😢' . $exception);
            return back();
        }
    }

    public function getClaimsClosed() {

        $claims = Claim::where('user_id', Auth::user()->id)
            ->where('isClose', 1)
            ->with('service')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        $users = UserM::all();

        return view('claims.claims-close', compact('claims', 'users'));
    }


    public function createInvoice() {

        $claims = Claim::where('isInvoice', 1)
            ->whereNull('invoice')
            ->with('service')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return view('claims.invoice', compact('claims'));
    }

    public function storeInvoice($id, Request $request)
    {
        $name = 'invoice'.$request->number;
        $validatedData = $request->validate(
            [
                 $name => 'required',
            ],
            [
                "$name.required" => 'Поле обязательно для заполнения',
            ]
        );


        DB::beginTransaction();

        try {

            $claim = Claim::find($id);
            if ($request->hasFile('invoice'.$request->number)) {
                $folder = date("Y-m-d");
                $invoiceFile = $request->file('invoice'.$request->number)->store("invoices/{$folder}");

                $claim->invoice = $invoiceFile;
                $claim->save();
            }


            $statusClaimId = StatusClaim::where('name', '=', 'Счет выставлен')->get()->first()->id;
            HistoryClaim::create([
                'user_id' => Auth::user()->id,
                'status_id' => $statusClaimId,
                'comment' => "Выставлен счет",
                'claim_id' => $claim->id,
            ]);

            $statusPayment = StatusPayment::where('name', '=', 'Счет выставлен')->get()->first()->id;
            HistoryPayment::create([
                'user_id' => Auth::user()->id,
                'status_id' => $statusPayment,
                'comment' => 'Выставлен счет',
                'claim_id' => $claim->id,
            ]);


            DB::commit();

            return redirect()->back()->with('success', 'Счет успешно добавлен 👍');
        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При обновлении заявки произошла ошибка 😢' . $exception);
            return back();
        }
    }


    public function closedInvoice()
    {
        $claims = Claim::where('isInvoice', 1)
            ->whereNotNull('invoice')
            ->with('service')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return view('claims.close-invoice', compact('claims'));
    }

    public function updateInvoice($id, Request $request)
    {
        $name = 'invoice'.$request->number;
        $validatedData = $request->validate(
            [
                $name => 'required',
            ],
            [
                "$name.required" => 'Поле обязательно для заполнения',
            ]
        );


        DB::beginTransaction();

        try {

            $claim = Claim::find($id);
            if ($request->hasFile('invoice'.$request->number)) {
                Storage::delete($claim->invoice);
                $folder = date("Y-m-d");
                $invoiceFile = $request->file('invoice'.$request->number)->store("invoices/{$folder}");

                $claim->invoice = $invoiceFile;
                $claim->save();
            }


            $statusClaimId = StatusClaim::where('name', '=', 'Счет выставлен')->get()->first()->id;
            HistoryClaim::create([
                'user_id' => Auth::user()->id,
                'status_id' => $statusClaimId,
                'comment' => "Обновлен счет на оплату",
                'claim_id' => $claim->id,
            ]);

            DB::commit();

            return redirect()->back()->with('success', 'Счет успешно добавлен 👍');
        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При обновлении заявки произошла ошибка 😢' . $exception);
            return back();
        }
    }


    public function storeAd($id, Request $request) {
        $validatedData = $request->validate(
            [
                'range_date_hidden' => 'required',
            ],
            [
                "range_date_hidden.required" => 'Выберите период рекламной кампании',
            ]
        );

        $date = explode('|', $request->range_date_hidden);

        $startDate = trim($date[0]) . " 00-00-00";
        $endDate = trim($date[1]) . " 00-00-00";

        DB::beginTransaction();

        try {

            $request->merge([
                'claim_id' => $id,
                'start_date' => $startDate,
                'end_date' => $endDate,
                'user_id' => Auth::user()->id,
            ]);

            ActiveAd::create($request->all());

            DB::commit();

            return redirect()->back()->with('success', 'Рекламная кампания успешно запущена 👍');
        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При запуске рекламной кампании произошла ошибка 😢');
            return back();
        }

    }

    public function deleteAd($id) {
        $ad = ActiveAd::find($id);
        $ad->delete();
        return redirect()->back()->with('success', 'Рекламная кампания успешно удалена 👍');
    }

    public function getActiveAd() {

        $activeAds = Claim::whereHas('activeAd', function ($q) {
                $q->where('end_date', '>=', now()->second(0)->minute(0)->hour(0));
            })
            ->where('creator', Auth::user()->id)
            ->get();

        return view('activeAd.index', compact('activeAds'));
    }

    public function getPastActiveAd() {

        $activeAds = Claim::whereHas('activeAd', function ($q) {
            $q->where('end_date', '<=', now()->second(0)->minute(0)->hour(0));
        })
            ->where('creator', Auth::user()->id)
            ->get();

        return view('activeAd.past', compact('activeAds'));
    }


}
