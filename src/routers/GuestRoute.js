import React from "react";
import {Route, Redirect} from "react-router-dom";

const GuestRoute = props => {

    const {isAuthenticated} = props

    return (
        !isAuthenticated ? <Route {...props} /> : <Redirect to="/"/>
    )
}

export default GuestRoute
