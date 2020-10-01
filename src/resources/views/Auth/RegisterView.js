import React from "react";
import RegisterContainer from "../../containers/Auth/RegisterContainer";
import Layout from "../../components/layout/Frontend/Layout";

const LoginView = props => {
    const {history} = props

    return (
        <Layout>
            <RegisterContainer history={history}/>
        </Layout>
    );

}

export default LoginView
