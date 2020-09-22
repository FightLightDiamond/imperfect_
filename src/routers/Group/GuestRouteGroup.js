import React from "react";
import {Switch} from 'react-router-dom'
import GuestRoute from "../GuestRoute";
import LoginView from "../../resources/views/Auth/LoginView";
import ForgotPasswordView from "../../resources/views/Auth/ForgotPasswordView";
import RegisterView from "../../resources/views/Auth/RegisterView";
import ResetPasswordView from "../../resources/views/Auth/ResetPasswordView";

import {
    LOGIN_PATH,
    FORGOT_PATH,
    REGISTER_PATH,
    REST_PATH
} from '../RouteType/GuestRouteType'

const GuestRouteGroup = props => {
    const {isUser} = props

    return (
        <Switch>
            <GuestRoute isUser={isUser} path={LOGIN_PATH} component={LoginView}/>
            <GuestRoute isUser={isUser} path={FORGOT_PATH} component={ForgotPasswordView}/>
            <GuestRoute isUser={isUser} path={REGISTER_PATH} component={RegisterView}/>
            <GuestRoute isUser={isUser} path={REST_PATH} component={ResetPasswordView}/>
        </Switch>
    );
}

export default GuestRouteGroup