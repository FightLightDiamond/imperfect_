import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class NavbarTop extends React.Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">CuongPM</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className={'nav-link'}>Home</Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/topics">Topics</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
