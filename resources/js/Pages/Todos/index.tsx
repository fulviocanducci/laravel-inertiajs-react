import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { ITodos } from "../../Types";

interface IPropsTodos {
    todos: ITodos[];
}

function Todos({ todos }: IPropsTodos) {
    console.log(todos);
    return (
        <div>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
                <ul>
                    {todos &&
                        todos.map((item) => (
                            <li key={item.id}>{item.description}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Todos;
