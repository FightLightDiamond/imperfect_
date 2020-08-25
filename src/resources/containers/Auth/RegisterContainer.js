import React from "react";
import {Form, Button} from "react-bootstrap";
import {connect} from "react-redux";
import {registerUser} from "../../../stores/redux/actions";

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "demo@gogo.com",
            password: "123456",
            password_confirmation: "123456"
        };
    }

    onUserRegister() {
        if (this.state.email !== "" && this.state.password !== "") {
            const {registerUser, history} = this.props
            registerUser(this.state, history);
        }
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={text => this.setState({email: text.target.value})}
                                  value={this.state.email}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={this.state.password} onChange={text => this.setState({password: text.target.value})} type="password"/>
                </Form.Group>

                <Form.Group controlId="formBasicPasswordConfirmation">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control value={this.state.password_confirmation}
                                  onChange={text => this.setState({password_confirmation: text.target.value})} type="password"/>
                </Form.Group>

                <Button
                    color="primary"
                    className="btn-shadow"
                    onClick={() => this.onUserRegister()}
                >
                    Submit
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = ({authUser}) => {
    const {user, loading} = authUser;
    return {user, loading};
};

export default connect(
    mapStateToProps,
    {
        registerUser
    }
)(RegisterContainer);
