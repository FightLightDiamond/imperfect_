import React from "react";
import {Link} from "react-router-dom";

const GuestLink = props => {
    const {to, name, isUser} = props

    return (
        !isUser ? <Link to={to} className='nav-link'>{name}</Link> : ''
    );
}

export default GuestLink