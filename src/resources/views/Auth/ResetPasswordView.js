import React from "react";
import {checkAuthenticated} from "../../../helpers/Authentication";

export default class ResetPasswordView extends React.Component {
    constructor(props) {
        super(props)

        if(checkAuthenticated('user')) props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>ResetPasswordView</h2>
            </div>
        );
    }
}
