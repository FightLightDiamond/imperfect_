import React from "react";
import LoginContainer from "../../containers/Auth/LoginContainer";

export default class LoginView extends React.Component {
    constructor(props) {
        super(props)

        if(props.isAuthenticated) props.history.push('/')
    }

    render() {
        return (
            <div>
                <LoginContainer history={this.props.history} />
            </div>
        );
    }
}
