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
        return redirect('/calendar');
    } else {
        return view('users.login');
    }
})->name('home');


Route::middleware(['auth'])->group(function () {

    Route::post('clients/typing', [ClientController::class, 'typing'])->name('clients.typing');
    Route::get('clients/kanban', [ClientController::class, 'kanban'])->name('clients.kanban');
    Route::get('clients/fast-add', [ClientController::class, 'createFast'])->name('clients.createFast');
    Route::post('clients/fast-add', [ClientController::class, 'storeFast'])->name('clients.storeFast');
    Route::resource('clients', ClientController::class);

    Route::patch('/all-clients/distribution/{client}', [ClientController::class, 'distributionUpdate'])->name('clients.distributionUpdate');
    Route::get('/all-clients/distribution', [ClientController::class, 'distribution'])->name('clients.distribution');
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
    Route::get('users/sales-category', [UserController::class, 'getSalesByCategory'])->name('users.salesCategory');
    Route::post('users/sales-category', [UserController::class, 'getSalesByCategoryAjax']);

    Route::get('users/repeat-password/{user}', [UserController::class, 'repeatPassword'])->name('users.repeat-password');
    Route::get('users/settings', [UserController::class, 'settings'])->name('users.settings');
    Route::post('users/settings', [UserController::class, 'storeSettings'])->name('users.storeSettings');
    Route::resource('users', UserController::class);

    Route::group(['middleware' => 'access'], function () {
        Route::resource('category', CategoryController::class);
        Route::resource('services', ServiceController::class);
        Route::resource('status-material', StatusMaterialController::class);
        Route::resource('packages', PackageController::class);
        Route::resource('status-client', StatusC::class);
        Route::resource('status-claim', StatusClaimController::class);
        Route::resource('status-payment', StatusPaymentController::class);

    });
    Route::resource('history-client', HistoryClientController::class);
    Route::get('plan/services', [SalesPlanController::class, 'services'])->name('plan.services');
    Route::get('plan/statistics', [SalesPlanController::class, 'statistics'])->name('plan.statistics');
    Route::get('plan/statistics/remoteData', [SalesPlanController::class, 'remoteData'])->name('plan.remote');
    Route::resource('plan', SalesPlanController::class);

    Route::post('goals/reports', [CalendarController::class, 'createReport'])->name('goals.create-report');
    Route::get('goals/reports', [CalendarController::class, 'reports'])->name('goals.reports');
    Route::get('goals/deadline', [GoalController::class, 'deadline'])->name('goals.deadline');
    Route::get('goals/send', [GoalController::class, 'send'])->name('goals.send');
    Route::post('goals/deadline/{goal}', [GoalController::class, 'repeatGoal'])->name('goals.repeatGoal');
    Route::post('goals/complete/{goal}', [GoalController::class, 'complete'])->name('goals.complete');
    Route::resource('goals', GoalController::class);

    Route::get('/created-claims', [ClaimController::class, 'createdClaims'])->name('claim.created');

    Route::get('/distribution-claims', [ClaimController::class, 'claimDistribution'])->name('claim.distribution');
    Route::get('/distribution-claims/complete', [ClaimController::class, 'claimDistributionComplete'])->name('claim.distributionComplete');
    Route::post('/distribution-claims/{claim}', [ClaimController::class, 'claimUserUpdate'])->name('claim.userUpdate');

    Route::post('/groups-claims/{claim}', [ClaimController::class, 'claimAccept'])->name('claim.claimAccept');
    Route::get('/groups-claims', [ClaimController::class, 'claimGroups'])->name('claim.claimGroups');

    Route::get('/my-claims', [ClaimController::class, 'claimsMy'])->name('claim.claimsMy');
    Route::get('/my-claims/closed', [ClaimController::class, 'getClaimsClosed'])->name('claim.getClaimsClosed');
    Route::post('/my-claims/{claim}/closed', [ClaimController::class, 'claimsClosed'])->name('claim.claimsClosed');

    Route::post('zip-download', [ZipController::class, 'downloadFiles'])->name('zip.downloadFiles');
    Route::post('zip-download-invoice', [ZipController::class, 'downloadFilesInvoices'])->name('zip.downloadFilesInvoices');

    Route::post('invoice/complete', [ClaimController::class, 'completeInvoice'])->name('claim.complete');
    Route::get('invoice', [ClaimController::class, 'createInvoice'])->name('claim.invoice');
    Route::get('invoice/closed', [ClaimController::class, 'closedInvoice'])->name('claim.closedInvoice');
    Route::post('invoice/{claim}', [ClaimController::class, 'storeInvoice'])->name('claim.storeInvoice');
    Route::post('invoice/closed/{claim}', [ClaimController::class, 'updateInvoice'])->name('claim.updateInvoice');


    Route::post('claims/complete', [ClaimController::class, 'getCompleteClaims']);
    Route::get('claims/complete', [ClaimController::class, 'complete'])->name('claim.complete');
    Route::delete('claims/{ad}/deleteAd', [ClaimController::class, 'deleteAd'])->name('claim.deleteAd');
    Route::post('claims/{claim}/storeAd', [ClaimController::class, 'storeAd'])->name('claim.storeAd');
    Route::post('claims/{claim}/storeHistory', [ClaimController::class, 'storeHistory'])->name('claim.storeHistory');
    Route::resource('claims', ClaimController::class);

    Route::get('payments', [PaymentController::class, 'index'])->name('payment.index');
    Route::get('payments/paid', [PaymentController::class, 'paid'])->name('payment.paid');
    Route::get('payments/paid/{claim}', [PaymentController::class, 'paidListClaims'])->name('payment.list-paid');
    Route::delete('payments/paid/{id}', [PaymentController::class, 'deletePaidClaims'])->name('payment.del-paid');
    Route::post('payments', [PaymentController::class, 'storeStatus'])->name('payment.store');

    Route::get('calendar', [CalendarController::class, 'index'])->name('calendar.index');
    Route::get('calendar/getGoals', [CalendarController::class, 'getGoals'])->name('calendar.getGoals');
    Route::get('calendar/getGoal/{goal}', [CalendarController::class, 'getGoalById'])->name('calendar.getGoalById');
    Route::patch('calendar/goal-update/{goal}', [CalendarController::class, 'updateGoal'])->name('calendar.updateGoal');
    Route::delete('calendar/goal-delete/{goal}', [CalendarController::class, 'deleteGoal'])->name('calendar.deleteGoal');

    Route::get('active-ad', [ClaimController::class, 'getActiveAd'])->name('claim.activeAd');
    Route::get('active-ad/past', [ClaimController::class, 'getPastActiveAd'])->name('claim.pastActiveAd');

    Route::post('/upload-filepond', [UploadController::class, 'store']);
    Route::post('/upload-files-goal', [UploadController::class, 'goalsStore']);

    //AJAX Request
    Route::post('/claim-inputs', [ClaimController::class, 'claimInputs'])->name('claims.claimInputs');
    Route::post('/get-users-by-group', [ServiceController::class, 'usersByGroup'])->name('services.usersByGroup');
    Route::post('/get-services-by-group', [ServiceController::class, 'servicesByGroup'])->name('services.servicesByGroup');
    Route::post('/get-package-by-service', [ServiceController::class, 'packageByService'])->name('services.packageByService');
    Route::delete('/claim/file-delete/{file}', [ClaimController::class, 'deleteFile'])->name('claim.deleteFile');

    Route::get('/logout', [UserController::class, 'logout'])->name('users.logout');
});

//AuthUser
Route::group(['middleware' => 'guest'], function () {
    Route::get('/login', [UserController::class, 'login'])->name('users.login');
    Route::post('/login', [UserController::class, 'auth'])->name('users.auth');
});
