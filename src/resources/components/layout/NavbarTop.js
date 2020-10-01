import React from "react";
import {Nav, Navbar} from "react-bootstrap";
// import {Link} from "react-router-dom";
import GuestLink from "../../../routers/Link/GuestLink";
import PrivateLink from "../../../routers/Link/PrivateLink";
import {
    ADMIN_LESSONS_PATH,
    // ADMIN_LESSON_PATH,
    // ADMIN_LESSONS_CREATE_PATH,
    // ADMIN_LESSONS_EDIT_PATH,

    ADMIN_QUESTIONS_PATH,
    // ADMIN_QUESTION_PATH,
    // ADMIN_QUESTION_CREATE_PATH,
    // ADMIN_QUESTION_EDIT_PATH
} from '../../../routers/RouteType/AdminRouteType'
import {
    MAIN_PATH,
    // ABOUT_PATH,
    // NOT_FOUND_PATH,

    LOGIN_PATH,
    // FORGOT_PATH,
    REGISTER_PATH,
    // REST_PATH
} from '../../../routers/RouteType/GuestRouteType'
import {LOGOUT_PATH} from "../../../routers/RouteType/UserRouteType";


const NavbarTop = props => {
    const {isUser, isAdmin} = props
    console.log('NavbarTop', props)
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href={MAIN_PATH}>CuongPM</Navbar.Brand>
            <Nav className="mr-auto">
                {/*<Link to="/">Home</Link>*/}
                <PrivateLink to={ADMIN_LESSONS_PATH} name={'Lesson'} isAuthenticated={isAdmin} />
                <PrivateLink to={ADMIN_QUESTIONS_PATH} name={'Question'} isAuthenticated={isAdmin}/>
                {/*<PrivateLink to="/quiz" name={'Quiz'} isUser={isUser}/>*/}
                {/*<PrivateLink to="/test" name={'Test'} isUser={isUser}/>*/}

                {/*<Link to="/lesson">Lesson</Link>*/}
                {/*<Link to="/quiz">Quiz</Link>*/}
                {/*<Link to="/test">Test</Link>*/}
                {/*<Link to={ABOUT_PATH}>About</Link>*/}
                {/*<Link to="/topics">Topics</Link>*/}
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