import React, {useEffect} from "react";
import {checkAuthenticated} from "../../../helpers/Authentication";
import Layout from "../../components/layout/Frontend/Layout";

const ForgotPasswordView = (props) => {
    useEffect(() => {
        if (checkAuthenticated('users')) props.history.push('/')
    }, [props.history])

    return (
        <Layout>
            <h2>ForgotPasswordView</h2>
        </Layout>
    );
}

export default ForgotPasswordView
