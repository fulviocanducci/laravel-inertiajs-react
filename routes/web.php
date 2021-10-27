<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    HomeController,
    TodosController
};

Route::get('/', [HomeController::class, "index"]);
Route::get('/todos', [TodosController::class, "index"]);