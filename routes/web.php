<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClaimController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\GoalController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\HistoryClientController;
use App\Http\Controllers\LprController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\RequisitesClient;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SalesPlanController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\StatusC;
use App\Http\Controllers\StatusClaimController;
use App\Http\Controllers\StatusMaterialController;
use App\Http\Controllers\StatusPaymentController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ZipController;
use App\Http\Controllers\CalendarController;
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

Route::patch('/allow/{client}', [ClientController::class, 'allowUpdate'])->name('clients.allowUpdate');
Route::get('/allow', [ClientController::class, 'allow'])->name('clients.allow');
Route::get('/all-clients', [ClientController::class, 'showAll'])->name('clients.showAll');
Route::get('clients/create-lpr/{client_id}', [LprController::class, 'createLpr'])->name('lpr.createLpr');
Route::post('clients/create-lpr/{client_id}', [LprController::class, 'storeLpr'])->name('lpr.storeLpr');
Route::resource('lpr', LprController::class);

Route::resource('requisites', RequisitesClient::class);
Route::resource('groups', GroupController::class);
Route::resource('roles', RoleController::class);
Route::get('users/remoteData', [UserController::class, 'getClaimsPayment'])->name('user.remote');
Route::resource('users', UserController::class);
Route::resource('category', CategoryController::class);
Route::resource('services', ServiceController::class);
Route::resource('status-material', StatusMaterialController::class);
Route::resource('packages', PackageController::class);
Route::resource('status-client', StatusC::class);
Route::resource('status-claim', StatusClaimController::class);
Route::resource('status-payment', StatusPaymentController::class);
Route::resource('history-client', HistoryClientController::class);

Route::get('plan/statistics', [SalesPlanController::class, 'statistics'])->name('plan.statistics');
Route::get('plan/statistics/remoteData', [SalesPlanController::class, 'remoteData'])->name('plan.remote');
Route::resource('plan', SalesPlanController::class);

Route::get('goals/deadline', [GoalController::class, 'deadline'])->name('goals.deadline');
Route::get('goals/send', [GoalController::class, 'send'])->name('goals.send');
Route::post('goals/deadline/{goal}', [GoalController::class, 'repeatGoal'])->name('goals.repeatGoal');
Route::post('goals/complete/{goal}', [GoalController::class, 'complete'])->name('goals.complete');
Route::resource('goals', GoalController::class);


Route::get('/distribution-claims', [ClaimController::class, 'claimDistribution'])->name('claim.distribution');
Route::get('/distribution-claims/complete', [ClaimController::class, 'claimDistributionComplete'])->name('claim.distributionComplete');
Route::post('/distribution-claims/{claim}', [ClaimController::class, 'claimUserUpdate'])->name('claim.userUpdate');

Route::post('/groups-claims/{claim}', [ClaimController::class, 'claimAccept'])->name('claim.claimAccept');
Route::get('/groups-claims', [ClaimController::class, 'claimGroups'])->name('claim.claimGroups');

Route::get('/my-claims', [ClaimController::class, 'claimsMy'])->name('claim.claimsMy');
Route::get('/my-claims/closed', [ClaimController::class, 'getClaimsClosed'])->name('claim.getClaimsClosed');
Route::post('/my-claims/{claim}/closed', [ClaimController::class, 'claimsClosed'])->name('claim.claimsClosed');

Route::post('zip-download', [ZipController::class, 'downloadFiles'])->name('zip.downloadFiles');

Route::get('invoice', [ClaimController::class, 'createInvoice'])->name('claim.invoice');
Route::get('invoice/closed', [ClaimController::class, 'closedInvoice'])->name('claim.closedInvoice');
Route::post('invoice/{claim}', [ClaimController::class, 'storeInvoice'])->name('claim.storeInvoice');
Route::post('invoice/closed/{claim}', [ClaimController::class, 'updateInvoice'])->name('claim.updateInvoice');
Route::delete('claims/{ad}/deleteAd', [ClaimController::class, 'deleteAd'])->name('claim.deleteAd');
Route::post('claims/{claim}/storeAd', [ClaimController::class, 'storeAd'])->name('claim.storeAd');
Route::post('claims/{claim}/storeHistory', [ClaimController::class, 'storeHistory'])->name('claim.storeHistory');
Route::resource('claims', ClaimController::class);

Route::get('payments', [PaymentController::class, 'index'])->name('payment.index');
Route::get('payments/paid', [PaymentController::class, 'paid'])->name('payment.paid');
Route::post('payments', [PaymentController::class, 'storeStatus'])->name('payment.store');

Route::get('calendar', [CalendarController::class, 'index'])->name('calendar.index');
Route::get('calendar/getGoals', [CalendarController::class, 'getGoals'])->name('calendar.getGoals');
Route::get('calendar/getGoal/{goal}', [CalendarController::class, 'getGoalById'])->name('calendar.getGoalById');
Route::patch('calendar/goal-update/{goal}', [CalendarController::class, 'updateGoal'])->name('calendar.updateGoal');
Route::delete('calendar/goal-delete/{goal}', [CalendarController::class, 'deleteGoal'])->name('calendar.deleteGoal');

Route::get('active-ad', [ClaimController::class, 'getActiveAd'])->name('claim.activeAd');

Route::post('/upload-filepond', [UploadController::class, 'store']);
Route::post('/upload-files-goal', [UploadController::class, 'goalsStore']);

//AJAX Request
Route::post('/claim-inputs', [ClaimController::class, 'claimInputs'])->name('claims.claimInputs');
Route::post('/get-users-by-group', [ServiceController::class, 'usersByGroup'])->name('services.usersByGroup');
Route::post('/get-services-by-group', [ServiceController::class, 'servicesByGroup'])->name('services.servicesByGroup');
Route::post('/get-package-by-service', [ServiceController::class, 'packageByService'])->name('services.packageByService');


//AuthUser
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
