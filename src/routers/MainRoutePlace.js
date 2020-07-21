import React from "react";
import HomeView from "../views/Frontend/HomeView";
import TopicsView from "../views/Frontend/TopicsView";
import {Route} from 'react-router-dom'
import AboutView from "../views/Frontend/AboutView";
import LoginView from "../views/Auth/LoginView";
import RegisterView from "../views/Auth/RegisterView";
import ForgotPasswordView from "../views/Auth/ForgotPasswordView";
import ResetPasswordView from "../views/Auth/ResetPasswordView";

export default class MainRoutePlace extends React.Component {
    render() {
        return (
            <div className="main-route-place">
                <Route exact path="/" component={HomeView}/>

                <Route path="/about" component={AboutView}/>
                <Route path="/topics" component={TopicsView}/>

                <Route path="/login" component={LoginView}/>
                <Route path="/register" component={RegisterView}/>
                <Route path="/forgot" component={ForgotPasswordView}/>
                <Route path="/reset" component={ResetPasswordView}/>
            </div>
        );
    }
}
