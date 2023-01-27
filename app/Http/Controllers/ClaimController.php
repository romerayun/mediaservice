<?php

namespace App\Http\Controllers;

use App\Models\ActiveAd;
use App\Models\Claim;
use App\Models\ClaimFile;
use App\Models\ClaimUsers;
use App\Models\Client;
use App\Models\Goal;
use App\Models\Group;
use App\Models\HistoryClaim;
use App\Models\HistoryPayment;
use App\Models\Package;
use App\Models\Service;
use App\Models\StatusClaim;
use App\Models\StatusPayment;
use App\Models\TemporaryFile;
use App\Models\UserM;
use App\Policies\ClaimPolicy;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
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


        $client = Client::find($request->client_id);
        if ($request->amount == null || trim($request->amount) == '' || $request->amount == '') {
            $request->merge([
                'amount' => 0,
            ]);
        } else {
            $amount = str_replace(' ', '', $request->amount);
            $request->merge([
                'amount' => $amount,
            ]);
        }




//        $this->authorize('check', $client);
//        if (Auth::user()->cannot('check', $client, Claim::class)) {
//            abort(403);
//        }
//        if (Auth::user()->cannot('create', Claim::class)) {
//            abort(403);
//        }
//        if ($client->user_id != Auth::user()->id) {
//            abort(403);
//        }

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

            if ($request->anotherUser == '0') {
                $request->merge([
                    'creator' => Auth::user()->id,
                ]);
            } else {
                $request->merge([
                    'creator' => $request->creator,
                ]);
            }


            $request->merge([
                'deadline' => $request->deadlineClaim,
                'user_id' => null,

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
        $users = UserM::where('isBlocked', 0)->get();
        $activeAd = ActiveAd::firstWhere('claim_id', $id);

        $claimUsers = ClaimUsers::where('claim_id', $id)
        ->get();

        $ids = array(0);
        if (count($claimUsers) != 0) {
            foreach ($claimUsers as $claimUser) {
                $ids[] = $claimUser->user_id;
            }
        }

        $withoutUsers = UserM::where('isBlocked', 0)
            ->whereNotIn('id', [$claim->creator, $claim->user_id])
            ->whereNotIn('id', $ids)
            ->get();

        return view('claims.show', compact('claim', 'countAdds', 'statusesClaim', 'users', 'activeAd', 'withoutUsers', 'claimUsers'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $claim = Claim::findOrFail($id);
        $groups = Group::all();
        $services = Service::where('group_id', $claim->service->group->id)->get();
        $packages = [];
        if ($claim->service->isPackage) {
            $packages = Package::where('service_id', $claim->service_id)->get();
        }
        $claimFiles = [];
        if ($claim->service->isRequiredMaterial) {
            $claimFiles = ClaimFile::where('claim_id', $claim->id)->get();
        }

        return view('claims.update', compact('groups', 'claim', 'services', 'packages', 'claimFiles'));
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
        $claim = Claim::firstWhere('id', $id);
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
            ]);

            $claim->fill($request->all())->save();


            if ($request->hasFile('brif')) {
                if ($claim->brif) {
                    Storage::delete($claim->brif);
                }
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

            $statusClaimId = StatusClaim::where('name', '=', 'Заявка обновлена')->get()->first()->id;
            HistoryClaim::create([
                'user_id' => Auth::user()->id,
                'status_id' => $statusClaimId,
                'comment' => 'Внесены изменения в заявку',
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
            $request->session()->flash('success', 'Заявка успешно обновлена 👍');
            return back();

        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При обновлении заявки произошла ошибка 😢');
            return back();
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $claim = Claim::find($id);
        $claim->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }

    public function claimInputs()
    {
        abort(404);
    }

    public function claimDistribution() {
        $claims = Claim::whereNull('user_id')
            ->where('isClose', 0)
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('user_id', \Illuminate\Support\Facades\Auth::user()->id);
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        claimsIsRead();

        $users = UserM::where('isBlocked', 0)->get();

        return view('claims.distribution', compact('claims', 'users'));
    }

    public function claimDistributionComplete() {
        $claims = Claim::whereNotNull('user_id')
            ->where('isClose', 0)
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('user_id', \Illuminate\Support\Facades\Auth::user()->id);
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        $users = UserM::where('isBlocked', 0)->get();

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
            ->where('isClose', 0)
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('group_id', Auth::user()->role->group_id);
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        $users = UserM::where('isBlocked', 0)->get();


        return view('claims.claim-group', compact('claims', 'users'));
    }

    public function claimsMy() {

        $claimUsers = ClaimUsers::where('user_id', Auth::user()->id)
            ->get();


        $ids = array(0);
        if (count($claimUsers) != 0) {
            foreach ($claimUsers as $claimUser) {
                $ids[] = $claimUser->claim_id;
            }
        }


        $claims = Claim::where('isClose', 0)
            ->where(function($query) use ($ids) {
                $query->where('user_id', Auth::user()->id)
                    ->orWhereIn('id', $ids);
            })
            ->with('service')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

//        dd($claims);

        $users = UserM::where('isBlocked', 0)->get();

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

    public function createdClaims() {

        $claims = Claim::where('creator', Auth::user()->id)
            ->where('isClose', 0)
            ->with('service')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        $users = UserM::where('isBlocked', 0)->get();

        return view('claims.claims-created', compact('claims', 'users'));
    }


    public function getClaimsClosed() {

        $claims = Claim::where('creator', Auth::user()->id)
            ->where('isClose', 1)
            ->with('service')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        $users = UserM::where('isBlocked', 0)->get();

        return view('claims.claims-close', compact('claims', 'users'));
    }


    public function createInvoice() {

        if (Auth::user()->role->level <= 2 || auth()->user()->userInvoice != 0) {
            $claims = Claim::where('isInvoice', 1)
                ->whereNull('invoice')
                ->with('service')
                ->orderBy('created_at', 'desc')
                ->paginate(10);

            return view('claims.invoice', compact('claims'));
        } else {
            abort(403);
        }
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

                $resStr = '';
                foreach ($request->file('invoice'.$request->number) as $file) {
                    $folder = date("Y-m-d");
//                    $invoiceFile = $request->file('invoice'.$request->number)->store("invoices/{$folder}");
                    $invoiceFile = $file->store("invoices/{$folder}");
                    $resStr .= $invoiceFile.'#';
                }
                $resStr = substr($resStr, 0, -1);


                $claim->invoice = $resStr;
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
//            if ($request->hasFile('invoice'.$request->number)) {
//                Storage::delete($claim->invoice);
//                $folder = date("Y-m-d");
//                $invoiceFile = $request->file('invoice'.$request->number)->store("invoices/{$folder}");
//
//                $claim->invoice = $invoiceFile;
//                $claim->save();
//            }
            if ($request->hasFile('invoice'.$request->number)) {

                $filesAll = explode('#', $claim->invoice);
                foreach ($filesAll as $file) {
                    Storage::delete($file);
                }

                $resStr = '';
                foreach ($request->file('invoice'.$request->number) as $file) {
                    $folder = date("Y-m-d");
//                    $invoiceFile = $request->file('invoice'.$request->number)->store("invoices/{$folder}");
                    $invoiceFile = $file->store("invoices/{$folder}");
                    $resStr .= $invoiceFile.'#';
                }
                $resStr = substr($resStr, 0, -1);


                $claim->invoice = $resStr;
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

        if (Auth::user()->role->level == 4) {

            $activeAds = Claim::whereHas('activeAd', function ($q) {
                $q->where('end_date', '>=', now()->second(0)->minute(0)->hour(0));
            })->get();

        } else {
            $activeAds = Claim::whereHas('activeAd', function ($q) {
                $q->where('end_date', '>=', now()->second(0)->minute(0)->hour(0));
            })
                ->where('creator', Auth::user()->id)
                ->get();
        }
        return view('activeAd.index', compact('activeAds'));
    }

    public function getPastActiveAd() {

        if (Auth::user()->role->level == 4) {

            $activeAds = Claim::whereHas('activeAd', function ($q) {
                $q->where('end_date', '<=', now()->second(0)->minute(0)->hour(0));
            })->get();

        } else {

            $activeAds = Claim::whereHas('activeAd', function ($q) {
                $q->where('end_date', '<=', now()->second(0)->minute(0)->hour(0));
            })
                ->where('creator', Auth::user()->id)
                ->get();
        }
        return view('activeAd.past', compact('activeAds'));
    }

    public function getActiveAdAll() {
        $activeAds = Claim::whereHas('activeAd', function ($q) {
            $q->where('end_date', '>=', now()->second(0)->minute(0)->hour(0));
        })->get();
        return view('activeAd.all', compact('activeAds'));
    }

    public function getPastActiveAdAll() {

        $activeAds = Claim::whereHas('activeAd', function ($q) {
            $q->where('end_date', '<=', now()->second(0)->minute(0)->hour(0));
        })->get();

        return view('activeAd.all-past', compact('activeAds'));

    }

    public function deleteFile($id) {
        $file = ClaimFile::find($id);
        if (!$file) {
            return response()->json([
                'error' => 'Файл не найден'
            ], 404);
        }

        Storage::delete($file->file);
        $file->delete();

        return response()->json("Файл успешно удален");
    }


    public function complete() {
        $groups = Group::all();
        return view('claims.complete', compact('groups'));
    }

    public function getCompleteClaims(Request $request) {

        $start = $request->month.'-00 00:00:00';
        $end = $request->month.'-32 00:00:00';
//
//        $start = '2023-01-00 00:00:00';
//        $end = '2023-01-32 00:00:00';

        $user_id = $request->user_id;
        $claimUsers = ClaimUsers::where('user_id', $user_id)
            ->with('claim')
            ->whereHas('claim', function ($q) {
                $q->where('isClose', 1);
            })
            ->get();


        $ids = array(0);
        if (count($claimUsers) != 0) {
            foreach ($claimUsers as $claimUser) {
                $ids[] = $claimUser->claim_id;
            }
        }


//        $claims = Claim::where('isClose', 0)
//            ->where(function($query) use ($ids) {
//                $query->where('user_id', Auth::user()->id)
//                    ->orWhereIn('id', $ids);
//            })
//            ->with('service')
//            ->orderBy('created_at', 'desc')
//            ->paginate(10);




//        $user_id = 3;
        $user = UserM::firstWhere('id', $user_id);

        $claims = Claim::with('histories')
            ->whereHas('histories', function ($q) use ($start, $end) {
                $q->where('created_at', '>=', $start)
                    ->where('created_at', '<=', $end);
            })
            ->where(function($query) use ($ids, $user_id) {
                $query->where('user_id', $user_id)
                    ->orWhereIn('id', $ids);
            })
            ->where('isClose', 1)
            ->get();



        $res = '';
        $res .= '<div class="col-12 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">Выполненные заявки сотрудника - ' . $user->getFullName() . '</h4>
                        <table class="table mt-3 table-hover datatables">';

        if (count($claims) == 0) {
            $res .= "<h5 class='mt-3'>Заявок не найдено</h5>";
        } else {


            $res .= '<thead>
                <tr>
                    <th>№ заявки</th>
                    <th>Категория услуги</th>
                    <th>Наименование услуги</th>
                    <th>Стоимость заявки</th>
                    <th>Причина закрытия</th>
                </tr>
            </thead><tbody>';

            $amount = 0;

            foreach ($claims as $claim) {

                $amount += $claim->amount;

                $res .= '<tr>
                        <td>' . $claim->id . '</td>
                        <td>' . $claim->service->category->name . '</td>
                        <td>' . $claim->service->name . '</td>
                        <td>' . money($claim->amount) . ' руб.</td>';
                if ($claim->commentClose == null) {
                    $res .= '<td>' . '-' . '</td>';
                } else {
                    $res .= '<td>' . $claim->commentClose . '</td>';
                }

                $res .= '</tr>';

            }

            $res .= '<tr><td colspan="2"><b>Итого выполненно услуг на сумму:</b></td><td class="text-primary"><b>' . money($amount) . ' руб.</b></td></tr></tbody>';
        }

        $res .='  </table></div>
                </div>
            </div>
        </div>';


        return $res;

    }


    public function completeInvoice(Request $request)
    {

        $id = $request->id;

        DB::beginTransaction();

        try {

            $claim = Claim::find($id);
            $claim->invoice = ' ';
            $claim->save();
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

            return "success";
        } catch (\Exception $exception) {
            DB::rollback();
            return "error";
        }
    }

    public function storeUsers($id, Request $request)
    {
        if (!isset($request->user_id)) {
            $request->session()->flash('error', 'Вы не выбрали ни однго сотрудника 😢');
            return back();
        } else {
            DB::beginTransaction();

            try {

                $arr = [
                    'claim_id' => $id,
                ];
                foreach ($request->user_id as $user) {
                    $arr['user_id'] = $user;
                    ClaimUsers::create($arr);
                }

                DB::commit();

                return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
            } catch (\Exception $exception) {
                DB::rollback();
                $request->session()->flash('error', 'При обновлении заявки произошла ошибка 😢' . $exception);
                return back();
            }
        }
//        dd($id, $request);
    }

    public function deleteUser($id) {
        $claimUser = ClaimUsers::find($id);
        $claimUser->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }
}
