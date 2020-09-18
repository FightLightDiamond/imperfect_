import React from "react";
import RegisterContainer from "../../containers/Auth/RegisterContainer";

const LoginView = props => {
    const {history} = props

    return (
        <div>
            <RegisterContainer history={history}/>
        </div>
    );

}

export default LoginView
