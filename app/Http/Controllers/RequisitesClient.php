<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequisitesClients;
use App\Models\RequisiteClient;
use Illuminate\Http\Request;

class RequisitesClient extends Controller
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
        abort(404);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $requisites = RequisiteClient::firstWhere('id', $id);
        return view('requisites.index', compact('requisites'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreRequisitesClients $request, $id)
    {

        if ($request->input('INN') != null) {
            $inn = $request->input('INN');

            $resultInn = RequisiteClient::where('INN', $inn)->first();

            if ($resultInn != null) {
                if ($resultInn->id != $id) {
                    $request->session()->flash('infoClient', $resultInn->client);
                    return back();
                }
            }
        }

        $requisites = RequisiteClient::firstWhere('id', $id);
        $requisites->update($request->all());
        return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
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
}
