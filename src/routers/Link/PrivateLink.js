import React from "react";
import {Link} from "react-router-dom";

const PrivateLink = props => {
    const {to, name, isUser} = props

    return (
        isUser ? <Link to={to} className='nav-link'>{name}</Link> : ''
    );
}

export default PrivateLink