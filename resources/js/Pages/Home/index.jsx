import { Link } from "@inertiajs/inertia-react";
import React, { useCallback, useState } from "react";

function Home() {
    const [value, setValue] = useState(0);
    const handleIncrement = useCallback(() => {
        setValue((state) => state + 1);
    }, []);
    const handleDecrement = useCallback(() => {
        setValue((state) => state - 1);
    }, []);
    return (
        <div>
            <div>{value}</div>
            <div>
                <button onClick={handleIncrement}>Incrementar</button>
                <button onClick={handleDecrement}>Decrementar</button>
            </div>
            <Link href="/todos">Todos</Link>
        </div>
    );
}

export default Home;
