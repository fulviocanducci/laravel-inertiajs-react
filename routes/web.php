<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    HomeController,
    LoginController,
    TodosController
};

Route::get('/login', [LoginController::class, "index"])->name('login');
Route::post('/login', [LoginController::class, "access"])->name('login.access');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', [HomeController::class, "index"])->name('home');
    Route::get('/todos', [TodosController::class, "index"])->name('todos.index');
    Route::post('/todos', [TodosController::class, "store"])->name('todos.store');
});