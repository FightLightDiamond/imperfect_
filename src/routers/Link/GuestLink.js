import React from "react";
import {Link} from "react-router-dom";

export default class GuestLink extends React.Component {
    render() {
        const {to, className, name, isAuthenticated} = this.props

        return (
            !isAuthenticated ? <Link to={to} className={className}>{name}</Link> : ''
        );
    }
}
