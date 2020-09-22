import React, {useEffect} from "react";
import {checkAuthenticated} from "../../../helpers/Authentication";

const ForgotPasswordView = (props) => {
    useEffect(() => {
        if (checkAuthenticated('users')) props.history.push('/')
    }, [props.history])

    return (
        <div>
            <h2>ForgotPasswordView</h2>
        </div>
    );
}

export default ForgotPasswordView
