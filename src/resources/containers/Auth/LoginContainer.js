import React from "react";
import {connect} from "react-redux";
import {loginUser} from "../../../stores/redux/actions";
import LoginComponent from "../../components/Auth/LoginComponent";

const LoginContainer = props => {
    return (
        <div className="container">
            <LoginComponent {...props} />
        </div>
    )
}

const mapStateToProps = ({authUser}) => {
    const {loading, error} = authUser;
    return {loading, error};
};

export default connect(
    mapStateToProps,
    {
        loginUser
    }
)(LoginContainer)
