<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreServ;
use App\Http\Requests\StoreService;
use App\Models\Category;
use App\Models\Group;
use App\Models\Service;
use App\Models\UserM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::all();
        $categories = Category::all();
        $groups = Group::all();
        return view('services.index', compact('categories', 'groups', 'services'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        $groups = Group::all();
        return view('services.create', compact('groups', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreService  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreService $request)
    {

        DB::beginTransaction();
        try {

            if(!$request->user_id) {
                $request->merge(['user_id' => null]);
            }

            Service::create($request->all());
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
        $service = Service::firstWhere('id', $id);
        $categories = Category::all();
        $groups = Group::all();
        if (!$service->user_id) $users = false;
        else $users = Group::with('roles.users')->find($service->group_id);
        return view('services.edit', compact('service', 'categories', 'groups', 'users'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreService $request, $id)
    {
        $service = Service::firstWhere('id', $id);
        if(!$request->user_id) {
            $request->merge(['user_id' => null]);
        }

        $service->update($request->all());
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
        $service = Service::find($id);
        $service->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }

    public function usersByGroup(Request $request) {

        if ($request->value > 0) {

            $users = Group::with('roles.users')->find($request->value);

            $htmlRes = '<option value="0">Не выбрано</option>';
            if (!$users) {
                echo $htmlRes;
                return;
            }

            if (!$users->roles->isEmpty()) {
                foreach ($users->roles as $role) {
                    $nameRole = $role->name;
                    if (!$role->users->isEmpty()) {
                        foreach ($role->users as $user) {
                            $htmlRes .= "<option value='$user->id'>$user->surname $user->name $user->patron ($nameRole)</option>";
                        }
                    }

                }
            }

            echo $htmlRes;
            return;

        }
        return 0;
    }

}
