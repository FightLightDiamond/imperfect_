import React from "react";
import LoginContainer from "../../containers/Auth/LoginContainer";
import {connect} from "react-redux";
import {logoutUser} from "../../../stores/redux/auth/actions";

class LogoutView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        this.props.logoutUser('user')
        this.props.history.push('/login')

        return (
            <div>
                <LoginContainer history={this.props.history} />
            </div>
        );
    }
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
