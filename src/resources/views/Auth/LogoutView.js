import {connect} from "react-redux";
import {logoutUser} from "../../../stores/redux/auth/actions";

const LogoutView = props => {
    props.logoutUser('user')
    props.history.push('/login')
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
