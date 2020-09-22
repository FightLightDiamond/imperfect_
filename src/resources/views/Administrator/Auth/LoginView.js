import React from "react";
import LoginContainer from "../../../containers/Auth/LoginContainer";

const LoginView = props => {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Login form with React Hook Form</h1>
                </div>
            </div>
            <LoginContainer provider={'admin'} {...props} />
        </div>
    );
}

export default LoginView