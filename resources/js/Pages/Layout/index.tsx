import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "@inertiajs/inertia-react";

interface IPropsLayout {
    children: React.ReactChild;
}

export default function Layout({ children }: IPropsLayout) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link
                            href="/"
                            data-rr-ui-event-key="#home"
                            className="nav-link"
                        >
                            Home
                        </Link>
                        <Link
                            href="/todos"
                            data-rr-ui-event-key="#todos"
                            className="nav-link"
                        >
                            Tarefas
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>{children}</Container>
        </>
    );
}
