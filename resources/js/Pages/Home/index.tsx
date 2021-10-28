import React from "react";

import Layout from "../Layout";
import { IUser } from "../../Types";
import { useCount } from "../../Hooks";

interface IPropsHome {
    user: IUser;
}

function Home({ user }: IPropsHome) {
    const { value, increment, decrement, reset } = useCount();
    return (
        <Layout>
            <>
                <div className="mt-3">
                    {user.name} ({user.email})
                </div>
                <div className="mt-3">{value}</div>
                <div className="mt-3">
                    <button
                        onClick={increment}
                        className="btn btn-primary btn-sm me-2"
                    >
                        Incrementar
                    </button>
                    <button
                        onClick={decrement}
                        className="btn btn-info btn-sm me-2"
                    >
                        Decrementar
                    </button>
                    <button onClick={reset} className="btn btn-danger btn-sm">
                        Iniciar
                    </button>
                </div>
            </>
        </Layout>
    );
}

export default Home;
