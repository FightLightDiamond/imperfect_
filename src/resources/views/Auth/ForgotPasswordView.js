import React from "react";
import {checkAuthenticated} from "../../../helpers/Authentication";

export default class ForgotPasswordView extends React.Component {
    constructor(props) {
        super(props)

        if(checkAuthenticated('user')) props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>ForgotPasswordView</h2>
            </div>
        );
    }
}
