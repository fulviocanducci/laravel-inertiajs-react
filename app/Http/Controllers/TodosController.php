<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodosController extends Controller
{
    public function index()
    {
        $todos = Todo::all();
        return Inertia::render('Todos/index', compact('todos'));
    }
}
