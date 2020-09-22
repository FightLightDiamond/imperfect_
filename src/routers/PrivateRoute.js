import React from "react";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = props => {
    const {path, component, isUser} = props

    return (
        isUser ? <Route path={path} component={component}/> : <Redirect to="/"/>
    )
}

export default PrivateRoute
