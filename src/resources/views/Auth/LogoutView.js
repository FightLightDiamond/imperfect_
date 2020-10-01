import React from "react";
import {connect} from "react-redux";
import {logoutUser} from "../../../stores/redux/auth/actions";
import { Redirect} from "react-router-dom";
import {LOGIN_PATH} from "../../../routers/RouteType/GuestRouteType";
export const LogoutView = props => {
    props.logoutUser('users')

    return <Redirect to={LOGIN_PATH}/>
}

const mapStateToProps = ({authUser}) => {
    const {user, loading, error} = authUser;
    return {user, loading, error};
};

export default connect(
    mapStateToProps,
    {
        logoutUser
    }
)(LogoutView);
