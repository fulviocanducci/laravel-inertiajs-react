<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TodosController extends Controller
{
    public function index()
    {
        $todos = Todo::orderBy('description')->paginate();
        return Inertia::render('Todos/index', compact('todos'));
    }

    public function store(Request $request)
    {
        Validator::make(
            $request->all(), 
            [
                'description' => ['required','min:3'],
                'active' => ['required', 'min:1', 'integer']
            ], 
            [
                'description.required' => 'Digite a tarefa',
                'description.min' => 'Digite a tarefa no minimo com 3 caracteres',
            ]
        )->validate();

        Todo::create($request->only('description', 'active'));
        return redirect()->to("/todos");
    }
}
