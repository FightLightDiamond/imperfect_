import React from "react";
import {Container} from "react-bootstrap";
import NavbarTop from "./NavbarTop";

const Layout = (props) => {
    const {children} = props
    return <div>
        <NavbarTop/>
        <Container>
            {children}
        </Container>
    </div>
}

export default Layout