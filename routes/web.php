<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::resource('tfoods',FoodController::class);
Route::get('/', [UserController::class, 'index'])->name('user.index');
Route::get('tfoods/{id}',[UserController::class,'show'])->name('tfoods.detail');
Route::get('/search', [UserController::class, 'search'])->name('tfoods.search');
Route::post('/tfoods/store', [FoodController::class, 'store'])->name('tfoods.store');
