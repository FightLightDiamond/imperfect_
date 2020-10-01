import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import MainRoutePlace from "./routers/MainRoutePlace";
import {connect} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const App = props => {
    console.log('App', props)
    // const {isUser} = props

    return (
        <BrowserRouter>
            <MainRoutePlace {...props}/>
            <ToastContainer/>
        </BrowserRouter>
    );
}

const mapStateToProps = ({authUser}) => {
    const {isUser, isAdmin} = authUser;
    return {isUser, isAdmin};
};

export default connect(
    mapStateToProps, {}
)(App);

