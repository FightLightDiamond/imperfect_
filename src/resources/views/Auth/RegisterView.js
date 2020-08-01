import React from "react";
import RegisterContainer from "../../containers/Auth/RegisterContainer";
import {checkAuthenticated} from "../../../helpers/Authentication";

export default class LoginView extends React.Component {
    constructor(props) {
        super(props)

        if(checkAuthenticated('user')) props.history.push('/')
    }

    render() {
        return (
            <div>
                <RegisterContainer history={this.props.history} />
            </div>
        );
    }
}
