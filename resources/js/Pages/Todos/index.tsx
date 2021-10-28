import React, { FormEvent } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { ListGroup } from "react-bootstrap";

import Layout from "../Layout";
import { ITodos, IPaginateGeneric } from "../../Types";

interface IPropsTodos {
    todos: IPaginateGeneric<ITodos>;
}

function Todos({ todos }: IPropsTodos) {
    const { data, setData, post, processing, errors, reset } = useForm({
        description: "",
        active: 1,
    });

    async function submit(e: FormEvent) {
        e.preventDefault();
        try {
            await post("/todos", {
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
        <Layout>
            <div className="mt-3 mb-5">
                <>
                    <form onSubmit={submit} className="mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="form-control"
                            />
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn btn-primary btn-sm"
                            >
                                Adicionar
                            </button>
                        </div>
                        <div>
                            {errors.description && (
                                <div className="text-danger">
                                    {errors.description}
                                </div>
                            )}
                        </div>
                    </form>
                    <ListGroup>
                        {todos?.data &&
                            todos.data.map((item) => (
                                <ListGroup.Item key={item.id} variant="warning">
                                    {item.description}
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </>
            </div>
        </Layout>
    );
}

export default Todos;
