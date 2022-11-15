<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\LprController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\RequisitesClient;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Mail\Feedback;
use App\Models\RequisiteClient;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (Auth::check()) {
        return view('home');
    } else {
        return view('users.login');
    }
})->name('home');



//Route::get('/', function () {
//    return view('home');
//})->name('home');
//Route::group(['middleware' => 'admin'], function () {
    Route::get('clients/fast-add', [ClientController::class, 'createFast'])->name('clients.createFast');
    Route::post('clients/fast-add', [ClientController::class, 'storeFast'])->name('clients.storeFast');
    Route::resource('clients', ClientController::class);

    Route::get('clients/create-lpr/{client_id}', [LprController::class, 'createLpr'])->name('lpr.createLpr');
    Route::post('clients/create-lpr/{client_id}', [LprController::class, 'storeLpr'])->name('lpr.storeLpr');
    Route::resource('lpr', LprController::class);

    Route::resource('requisites', RequisitesClient::class);

    Route::resource('groups', GroupController::class);
    Route::resource('roles', RoleController::class);


    Route::resource('users', UserController::class);
//});

Route::group(['middleware' => 'guest'], function () {
    Route::get('/login', [UserController::class, 'login'])->name('users.login');
    Route::post('/login', [UserController::class, 'auth'])->name('users.auth');

});

Route::get('/logout', [UserController::class, 'logout'])->name('users.logout');


// Mail Controller
//Route::get('/send-mail', [MailController::class, 'sendMail'])->name('mail.send');
//Route::get('/mail-preview', function(){
//    $params = [
//        'email' => 'romerayun@gmail.com',
//        'password' => 'qwerty123',
//    ];
//
//    return new Feedback($params);
//});
