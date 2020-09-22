import React from "react";
import {Route, Redirect} from "react-router-dom";

const GuestRoute = props => {

    const {isUser} = props

    return (
        !isUser ? <Route {...props} /> : <Redirect to="/"/>
    )
}

export default GuestRoute
