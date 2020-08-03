import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import GuestLink from "../../../routers/GuestLink";
import PrivateLink from "../../../routers/PrivateLink";
import axios from 'axios'

export default class NavbarTop extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            posts: [],
            error: ''
        }
    }

    componentDidMount() {
        const wordPressSiteUrl = 'http://localhost:4000/';

        this.setState({
            loading: true
        }, () => {

        })
    }

    render() {
        const {isAuthenticated} = this.props

        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">CuongPM</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className={'nav-link'}>Home</Link>

                    <PrivateLink to="/lessons" className={'nav-link'} name={'Lesson'} isAuthenticated={isAuthenticated}/>
                    <PrivateLink to="/quiz" className={'nav-link'} name={'Quiz'} isAuthenticated={isAuthenticated}/>
                    <PrivateLink to="/test" className={'nav-link'} name={'Test'} isAuthenticated={isAuthenticated}/>

                    {/*<Link to="/lesson" className={'nav-link'}>Lesson</Link>*/}
                    {/*<Link to="/quiz" className={'nav-link'}>Quiz</Link>*/}
                    {/*<Link to="/test" className={'nav-link'}>Test</Link>*/}
                    <Link to="/about" className={'nav-link'}>About</Link>
                    <Link to="/topics" className={'nav-link'}>Topics</Link>
                </Nav>
                <Nav>
                    <GuestLink to="/login" className={'nav-link'} name={'Login'} isAuthenticated={isAuthenticated}/>
                    <GuestLink to="/register" className={'nav-link'} name={'Register'} isAuthenticated={isAuthenticated}/>
                    <PrivateLink to="/logout" className={'nav-link'} name={'Logout'} isAuthenticated={isAuthenticated}/>
                    {/*<Nav.Link href="/login">Login</Nav.Link>*/}
                    {/*<Nav.Link href="/register">Register</Nav.Link>*/}
                </Nav>
            </Navbar>
        );
    }
}
