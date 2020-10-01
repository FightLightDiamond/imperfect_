import React from "react";
import {Link} from "react-router-dom";

const PrivateLink = props => {
    const {to, name, isAuthenticated} = props

    return (
        isAuthenticated ? <Link to={to} className='nav-link'>{name}</Link> : ''
    );
}

export default PrivateLink