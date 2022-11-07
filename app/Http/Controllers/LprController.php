<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLpr;
use App\Models\LprClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LprController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
//        return view('lpr.create');
    }

    public function createLpr($client_id) {

        return view('lpr.create', compact('client_id'));
    }

    public function storeLpr($client_id, StoreLpr $request) {

        DB::beginTransaction();
        try {
            $lpr = LprClient::create($request->all());
            DB::commit();
            $lpr->client_id = $client_id;
            $lpr->save();
            DB::commit();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢'. $exception);
            return back();
        }
        return true;
//        return view('lpr.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
