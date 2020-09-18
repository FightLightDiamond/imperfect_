import React from "react";
import LoginContainer from "../../containers/Auth/LoginContainer";

const LoginView = props => {
    const {history} = props

    return (
        <div>
            <LoginContainer history={history}/>
        </div>
    );
}

export default LoginView
