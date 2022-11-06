<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClients;
use App\Models\Client;
use App\Models\LprClient;
use App\Models\RequisiteClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        return view('clients.create');
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
                'inn' => 'required|integer',
            ],
            [
                'inn.required' => 'Поле ИНН не может быть пустым',
                'inn.integer' => 'Поле ИНН может состоять только из цифр',
            ]
        );

        $inn = $request->input('inn');

        $resultInn = RequisiteClient::where('inn', $inn)->first();
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

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢'. $exception);
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
        //
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
        //
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
