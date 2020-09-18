import React from "react";
import {Switch} from 'react-router-dom'
import GuestRoute from "../GuestRoute";
import LoginView from "../../resources/views/Auth/LoginView";
import ForgotPasswordView from "../../resources/views/Auth/ForgotPasswordView";
import RegisterView from "../../resources/views/Auth/RegisterView";
import ResetPasswordView from "../../resources/views/Auth/ResetPasswordView";


const GuestRouteGroup = props => {
    const {isAuthenticated} = props

    return (
        <Switch>
            <GuestRoute isAuthenticated={isAuthenticated} path="/login" component={LoginView}/>
            <GuestRoute isAuthenticated={isAuthenticated} path="/forgot" component={ForgotPasswordView}/>
            <GuestRoute isAuthenticated={isAuthenticated} path="/register" component={RegisterView}/>
            <GuestRoute isAuthenticated={isAuthenticated} path="/reset" component={ResetPasswordView}/>
        </Switch>
    );
}

export default GuestRouteGroup