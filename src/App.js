import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import {Container} from "react-bootstrap";
import NavbarTop from "./resources/components/layout/NavbarTop";
import MainRoutePlace from "./routers/MainRoutePlace";
import {connect} from "react-redux";
import {loginUser} from "./stores/redux/auth/actions";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const App = props => {
    console.log(props)
    // const {isUser} = props

    return (
        <BrowserRouter>
            <NavbarTop {...props}/>

            <Container style={{padding: "20px 0"}}>
                <MainRoutePlace {...props}/>
            </Container>
            <ToastContainer/>
        </BrowserRouter>
    );
}

const mapStateToProps = ({authUser}) => {
    const {isUser} = authUser;
    return {isUser};
};

export default connect(
    mapStateToProps,
    {
        loginUser
    }
)(App);

