<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index() 
    {
        return Inertia::render("Login/index");
    }

    public function access(Request $request)
    {
        Validator::make(
            $request->all(), 
            [
                'email' => ['required', 'email'],
                'password' => ['required', 'min:6']
            ], 
            [
                'email.required' => 'Digite o e-mail',
                'email.email' => 'E-mail inválido',
                'password.required' => 'Digite a senha',
                'password.min' => 'Senha comprimento inválido',
            ]
        )->validate();
        
        if (Auth::attempt($request->only(['email', 'password']))) 
        {
            $request->session()->regenerate();
            return redirect()->intended('/');
        }
        
        return back()->withErrors([
            'email' => 'E-mail inválido ou inexistente',
            'password' => 'Senha inválida ou inexistente'
        ]);
    }
}
