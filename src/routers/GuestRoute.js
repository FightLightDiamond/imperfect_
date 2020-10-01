import React from "react";
import {Route, Redirect} from "react-router-dom";
import {MAIN_PATH} from "./RouteType/GuestRouteType";

const GuestRoute = props => {
    console.log('GuestRoute', props)

    const {isAuthenticated} = props

    return (
        !isAuthenticated ? <Route {...props} /> : <Redirect to={MAIN_PATH} />
    )
}

export default GuestRoute
