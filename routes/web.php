<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\GoalController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\HistoryClientController;
use App\Http\Controllers\LprController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\RequisitesClient;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\StatusC;
use App\Http\Controllers\StatusClaimController;
use App\Http\Controllers\StatusMaterialController;
use App\Http\Controllers\UserController;
use App\Mail\Feedback;
use App\Models\RequisiteClient;
use App\Models\StatusClaim;
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


Route::get('clients/fast-add', [ClientController::class, 'createFast'])->name('clients.createFast');
Route::post('clients/fast-add', [ClientController::class, 'storeFast'])->name('clients.storeFast');
Route::resource('clients', ClientController::class);

Route::get('/all-clients', [ClientController::class, 'showAll'])->name('clients.showAll');
Route::get('clients/create-lpr/{client_id}', [LprController::class, 'createLpr'])->name('lpr.createLpr');
Route::post('clients/create-lpr/{client_id}', [LprController::class, 'storeLpr'])->name('lpr.storeLpr');
Route::resource('lpr', LprController::class);

Route::resource('requisites', RequisitesClient::class);
Route::resource('groups', GroupController::class);
Route::resource('roles', RoleController::class);
Route::resource('users', UserController::class);
Route::resource('category', CategoryController::class);
Route::resource('services', ServiceController::class);
Route::resource('status-material', StatusMaterialController::class);
Route::resource('packages', PackageController::class);
Route::resource('status-client', StatusC::class);
Route::resource('status-claim', StatusClaimController::class);
Route::resource('history-client', HistoryClientController::class);
Route::get('goals/deadline', [GoalController::class, 'deadline'])->name('goals.deadline');
Route::get('goals/send', [GoalController::class, 'send'])->name('goals.send');
Route::post('goals/complete/{goal}', [GoalController::class, 'complete'])->name('goals.complete');
Route::resource('goals', GoalController::class);


Route::post('/get-users-by-group', [ServiceController::class, 'usersByGroup'])->name('services.usersByGroup');


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
