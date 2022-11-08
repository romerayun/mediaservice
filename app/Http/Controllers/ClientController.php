<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClients;
use App\Models\Client;
use App\Models\LprClient;
use App\Models\RequisiteClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clients = Client::paginate(9);


        return view('clients.index', compact('clients'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    public function createFast()
    {
//        return 1;
        return view('clients.fast');
    }

    public function storeFast(StoreClients $request)
    {

        $validatedData = $request->validate(
            [
                'inn' => 'required|regex:/^[0-9]+$/|min:10|max:12',
            ],
            [
                'inn.required' => 'Поле ИНН не может быть пустым',
                'inn.regex' => 'Поле ИНН может состоять только из цифр',
                'INN.min' => 'Поле ИНН не может быть меньше 10 символов',
                'INN.max' => 'Поле ИНН не может быть больше 12 символов',
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
            $client = Client::create($request->all());
            DB::commit();
            $folder = date("Y-m-d");
            $data['logo'] = $request->file('logo')->store("images/{$folder}");
            $client->logo = $data['logo'];
            $client->save();
            DB::commit();
            $idClient = $client->id;

            $rc = new RequisiteClient;
            $rc->INN = $inn;
            $rc->client_id = $idClient;
            $rc->save();
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
    public function store(Request $request)
    {
        //
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
        return view('clients.show', compact('client'));
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


}
