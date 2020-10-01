import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import GuestLink from "../../../../routers/Link/GuestLink";
import PrivateLink from "../../../../routers/Link/PrivateLink";
import {
    ADMIN_LESSONS_PATH,
    ADMIN_QUESTIONS_PATH,
} from '../../../../routers/RouteType/AdminRouteType'
import {
    MAIN_PATH,
    LOGIN_PATH,
    REGISTER_PATH,
} from '../../../../routers/RouteType/GuestRouteType'
import {LOGOUT_PATH} from "../../../../routers/RouteType/UserRouteType";


const NavbarTop = props => {
    const {isUser, isAdmin} = props
    console.log('NavbarTop', props)
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href={MAIN_PATH}>CuongPM</Navbar.Brand>
            <Nav className="mr-auto">
                <PrivateLink to={ADMIN_LESSONS_PATH} name={'Lesson'} isAuthenticated={isAdmin} />
                <PrivateLink to={ADMIN_QUESTIONS_PATH} name={'Question'} isAuthenticated={isAdmin}/>
            </Nav>
            <Nav>
                <GuestLink to={LOGIN_PATH} name={'Login'} isAuthenticated={isUser}/>
                <GuestLink to={REGISTER_PATH} name={'Register'} isAuthenticated={isUser}/>
                <PrivateLink to={LOGOUT_PATH} name={'Logout'} isAuthenticated={isUser}/>
            </Nav>
        </Navbar>
    );
}

export default NavbarTop