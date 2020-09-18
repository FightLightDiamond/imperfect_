import React from "react";
import {Link} from "react-router-dom";

const PrivateLink = props => {
    const {to, className, name, isAuthenticated} = props

    return (
        isAuthenticated ? <Link to={to} className={className}>{name}</Link> : ''
    );
}

export default PrivateLink