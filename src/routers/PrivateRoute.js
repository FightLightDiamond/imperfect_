import React from "react";
import {Route, Redirect} from "react-router-dom";
import {MAIN_PATH} from "./RouteType/GuestRouteType";

const PrivateRoute = props => {
    console.log('PrivateRoute', props)
    const {path, component, isAuthenticated} = props

    return (
        isAuthenticated ? <Route path={path} component={component}/> : <Redirect to={MAIN_PATH}/>
    )
}

export default PrivateRoute
