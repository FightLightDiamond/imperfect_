import React from "react";
import {Link} from "react-router-dom";

const GuestLink = props => {
    const {to, name, isAuthenticated} = props

    return (
        !isAuthenticated ? <Link to={to} className='nav-link'>{name}</Link> : ''
    );
}

export default GuestLink