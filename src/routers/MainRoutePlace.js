import React from "react";
import HomeView from "../views/Frontend/HomeView";
import TopicsView from "../views/Frontend/TopicsView";
import {Route} from 'react-router-dom'
import AboutView from "../views/Frontend/AboutView";
import LoginView from "../views/Auth/LoginView";
import RegisterView from "../views/Auth/RegisterView";
import ForgotPasswordView from "../views/Auth/ForgotPasswordView";
import ResetPasswordView from "../views/Auth/ResetPasswordView";
import LessonView from "../views/Frontend/LessonView";
import TestView from "../views/Frontend/TestView";
import QuizView from "../views/Frontend/QuizView";
import PrivateRoute from './PrivateRoute'
import GuestRoute from './GuestRoute'

export default class MainRoutePlace extends React.Component {
    render() {
        const {isAuthenticated} = this.props

        return (
            <div className="main-route-place">
                <Route exact path="/" component={HomeView}/>
                <Route path="/about" component={AboutView}/>

                <PrivateRoute isAuthenticated={isAuthenticated} path="/lesson" component={LessonView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/quiz" component={QuizView}/>

                <GuestRoute isAuthenticated={isAuthenticated} path="/login" component={LoginView}/>
                <GuestRoute isAuthenticated={isAuthenticated} path="/forgot" component={ForgotPasswordView}/>
                <GuestRoute isAuthenticated={isAuthenticated} path="/register" component={RegisterView}/>
                <GuestRoute isAuthenticated={isAuthenticated} path="/reset" component={ResetPasswordView}/>

                <PrivateRoute isAuthenticated={isAuthenticated} path="/topics" component={TopicsView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/test" component={TestView}/>
            </div>
        );
    }
}
