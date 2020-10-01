import React from "react"
import LoginContainer from "../../containers/Auth/LoginContainer"
import Layout from "../../components/layout/Frontend/Layout"


const LoginView = props => {
    return (
        <Layout>
            <LoginContainer provider={'users'} {...props} />
        </Layout>
    );
}

export default LoginView
