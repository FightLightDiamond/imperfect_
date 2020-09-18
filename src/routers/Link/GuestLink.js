import React from "react";
import {Link} from "react-router-dom";

const GuestLink = props => {
    const {to, className, name, isAuthenticated} = props

    return (
        !isAuthenticated ? <Link to={to} className={className}>{name}</Link> : ''
    );
}

export default GuestLink