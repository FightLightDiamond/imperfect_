import React from "react";
import LoginContainer from "../../../containers/Auth/LoginContainer";
import Auth from "../../../../config/Auth";

const LoginView = props => {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Login form with React Hook Form</h1>
                </div>
            </div>
            <LoginContainer provider={Auth.ADMIN_PROVIDER} {...props} />
        </div>
    );
}

export default LoginView