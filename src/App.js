import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import {Container} from "react-bootstrap";
import NavbarTop from "./resources/components/layout/NavbarTop";
import MainRoutePlace from "./routers/MainRoutePlace";
import {connect} from "react-redux";
import {loginUser} from "./stores/redux/auth/actions";

class App extends React.Component {
    render() {
      const {isAuthenticated} = this.props
        return (
            <BrowserRouter>
                <NavbarTop isAuthenticated={isAuthenticated}/>

                <Container style={{padding: "20px 0"}}>
                    <MainRoutePlace isAuthenticated={isAuthenticated} />
                </Container>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({authUser}) => {
    const {isAuthenticated} = authUser;
    return {isAuthenticated};
};

export default connect(
    mapStateToProps,
    {
        loginUser
    }
)(App);

