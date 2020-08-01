import React from "react";
import {connect} from "react-redux";
import {loginUser} from "../../../stores/redux/actions";
import {Button, Form} from "react-bootstrap";

class LoginContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "demo@gogo.com",
            password: "gogo123"
        };
    }

    onUserLogin = () => {
        this.props.loginUser(this.state, this.props.history);
    }

    render() {
        return (
            <div>
                Loading: {this.props.loading}
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                                      value={this.state.email}
                                      onChange={text => this.setState({email: text.target.value})}
                                      placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      value={this.state.password}
                                      onChange={text => this.setState({password: text.target.value})}
                                      placeholder="Password"/>
                    </Form.Group>

                    <Button variant="primary" onClick={this.onUserLogin}>
                        Submit
                    </Button>
                </Form>
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
        loginUser
    }
)(LoginContainer);
