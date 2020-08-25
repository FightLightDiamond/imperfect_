import React from "react";
import { Route, Redirect } from "react-router-dom";

export default class PrivateRoute extends React.Component {

    render() {
        const {path, component, isAuthenticated} = this.props

        return (
            isAuthenticated ? <Route path={path} component={component} /> : <Redirect to="/" />
        )
    }
}
