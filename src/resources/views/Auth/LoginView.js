import React from "react";
import LoginContainer from "../../containers/Auth/LoginContainer";

const LoginView = props => {
    return (
        <div>
            <LoginContainer provider={'users'} {...props} />
        </div>
    );
}

export default LoginView
