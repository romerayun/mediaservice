<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\LprController;
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
    return view('home');
})->name('home');

Route::get('clients/fast-add', [ClientController::class, 'createFast'])->name('clients.createFast');
Route::post('clients/fast-add', [ClientController::class, 'storeFast'])->name('clients.storeFast');
Route::resource('clients', ClientController::class);

Route::get('clients/create-lpr/{client_id}', [LprController::class, 'createLpr'])->name('lpr.createLpr');
Route::post('clients/create-lpr/{client_id}', [LprController::class, 'storeLpr'])->name('lpr.storeLpr');
Route::resource('lpr', LprController::class);

