<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClients;
use App\Models\Claim;
use App\Models\Client;
use App\Models\Group;
use App\Models\HistoryClaim;
use App\Models\HistoryClient;
use App\Models\LprClient;
use App\Models\RequisiteClient;
use App\Models\StatusClient;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = '%';
        if ($request->input('search')) {
            $request->merge(['search' => $request->input('search')]);
            $validatedData = $request->validate(
                [
                    'search' => 'required|string|min:1',
                ],
                [
                    'search.required' => 'Введите поисковый запрос',
                    'search.min' => 'Введите поисковый запрос',
                    'search.string' => 'Введите поисковый запрос',
                ]
            );

            $search = '%' . $request->input('search') . '%';
        }


        $clients = Client::where('user_id', Auth::user()->id)
            ->where(function ($q) use ($search) {
                $q->where('name', 'like', $search);
                $q->orWhere('phone', 'like', $search);
                $q->orWhere('address', 'like', $search);
                $q->orWhere('email', 'like', $search);
            })
            ->where('isAllow', 1)
            ->paginate(9);


        return view('clients.index', compact('clients'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('clients.create');
    }

    public function createFast()
    {
//        return 1;
        return view('clients.fast');
    }

    public function store(StoreClients $request)
    {

        $validatedData = $request->validate(
            [
                'inn' => 'required|regex:/^[0-9]+$/|min:10|max:12',
            ],
            [
                'inn.required' => 'Поле ИНН не может быть пустым',
                'inn.regex' => 'Поле ИНН может состоять только из цифр',
                'inn.min' => 'Поле ИНН не может быть меньше 10 символов',
                'inn.max' => 'Поле ИНН не может быть больше 12 символов',
            ]
        );

        $inn = $request->input('inn');

        $resultInn = RequisiteClient::where('INN', $inn)->first();
        if ($resultInn != null) {
            $request->session()->flash('infoClient', $resultInn->client);
            return back();
        }

        DB::beginTransaction();

        $data = [];
        try {
            if (Auth::user()->role->level == 1) {
                $request->merge(['isAllow' => 1]);
            }
            $date = Carbon::createFromFormat('d.m.Y', $request->date_of_birth)->format('Y-m-d');
            $request->merge(['date_of_birth' => $date]);

            $client = Client::create($request->all());
            DB::commit();
            if ($request->hasFile('logo')) {
                $folder = date("Y-m-d");
                $data['logo'] = $request->file('logo')->store("images/{$folder}");
                $client->logo = $data['logo'];
                $client->save();
                DB::commit();
            }
            $idClient = $client->id;

            $rc = new RequisiteClient;
            $rc->INN = $inn;
            $rc->client_id = $idClient;
            $rc->save();
            DB::commit();

            $history = new HistoryClient;
            $history->status_id = StatusClient::where('name', 'Создан клиент')->get()->first()->id;
            $history->client_id = $idClient;
            $history->comment = 'Создан новый клиент';
            $history->user_id = Auth::user()->id;
            $history->save();
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
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function storeFast(Request $request)
    {
        $validatedData = $request->validate(
            [
                'name' => 'required',
                'phone' => 'required|regex:/^(\+7)(\()[0-9]{3}(\))[0-9]{3}(\-)[0-9]{2}(\-)[0-9]{2}$/',
            ],
            [
                'name.required' => 'Поле наименование не может быть пустым',
                'phone.required' => 'Поле номер телефона не может быть пустым',
                'phone.regex' => 'Поле номер телефона должен быть в формате +7(999)999-99-99',
            ]
        );

        DB::beginTransaction();

        try {
            if (Auth::user()->role->level == 1) {
                $request->merge(['isAllow' => 1]);
            }
            $client = Client::create($request->all());
            DB::commit();
            $idClient = $client->id;
            $rc = new RequisiteClient;
            $rc->client_id = $idClient;
            $rc->save();
            DB::commit();

            $history = new HistoryClient;
            $history->status_id = StatusClient::where('name', 'Создан клиент')->get()->first()->id;
            $history->client_id = $idClient;
            $history->comment = 'Создан новый клиент';
            $history->user_id = Auth::user()->id;
            $history->save();
            DB::commit();

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
    public function show($id)
    {
        $client = Client::firstWhere('id', $id);
        $statusClient = StatusClient::where('isVisible', 1)->get();
        $listStatusesClient = HistoryClient::where('client_id', $id)->orderBy('id', 'desc')->get();
        $groups = Group::all();
//        $claims = Claim::where('client_id', $id)->get();
//        $listStatusesClaims = HistoryClaim::where('client_id', $id)->orderBy('id', 'desc')->get();
        $claims = Claim::where('client_id', $id)->with('histories')->orderBy('created_at', 'desc')->get();
//        $services =

        return view('clients.show', compact('client', 'statusClient', 'listStatusesClient', 'groups', 'claims'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $client = Client::firstWhere('id', $id);
        return view('clients.edit', compact('client'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreClients $request, $id)
    {
        $inn = $request->input('inn');

        $resultInn = RequisiteClient::where('INN', $inn)->first();

        if ($resultInn != null) {
            if ($resultInn->client_id != $id) {
                $request->session()->flash('infoClient', $resultInn->client);
                return back();
            }
        }

        DB::beginTransaction();

        try {
            $client = Client::firstWhere('id', $id);

            $client->update($request->all());
            DB::commit();

            $data = [];
            if ($request->hasFile('logo')) {
                Storage::delete($client->logo);
                $folder = date("Y-m-d");
                $data['logo'] = $request->file('logo')->store("images/{$folder}");
                $client->logo = $data['logo'];
                $client->save();
                DB::commit();
            }


            $client->requisite->INN = $inn;
            $client->save();
            DB::commit();

            return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢');
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $client = Client::find($id);
        $client->delete();
        return redirect()->route('clients.index')->with('success', 'Данные успешно удалены 👍');
    }

    public function showAll()
    {
        $clients = Client::where('isAllow', 1)->get();
        return view('clients.all', compact('clients'));
    }

    public function allow()
    {
        $clients = Client::where('isAllow', 0)->get();
        return view('clients.allow', compact('clients'));
    }

    public function allowUpdate($id, Request $request)
    {
        DB::beginTransaction();
        try {
            $client = Client::firstWhere('id', $id);
            $client->isAllow = 1;
            $client->save();
            DB::commit();

            return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При обновлении данных произошла ошибка 😢');
            return back();
        }
    }

}
