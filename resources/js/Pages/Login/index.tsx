import { useForm } from "@inertiajs/inertia-react";
import React, { FormEvent } from "react";

interface IPropsForm {
    email: string;
    password: string;
}

export default function Login() {
    const { data, setData, post, processing, errors, reset } =
        useForm<IPropsForm>({
            email: "",
            password: "",
        });
    async function submit(e: FormEvent) {
        e.preventDefault();
        try {
            await post("/login", {
                onSuccess: function () {
                    reset();
                },
                onError: function (errors) {
                    console.log(errors);
                },
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="mt-3 container">
            <form onSubmit={submit} className="mb-3">
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="form-control"
                        placeholder="E-mail"
                    />
                    <div>
                        {errors.email && (
                            <div className="text-danger">{errors.email}</div>
                        )}
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="form-control"
                        placeholder="Senha"
                    />
                    <div>
                        {errors.password && (
                            <div className="text-danger">{errors.password}</div>
                        )}
                    </div>
                </div>
                <div className="mt-3 mb-5">
                    <button
                        type="submit"
                        disabled={processing}
                        className="btn btn-success btn-sm"
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    );
}
