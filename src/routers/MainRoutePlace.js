import React from "react";
import HomeView from "../resources/views/Frontend/HomeView";
import TopicsView from "../resources/views/Frontend/TopicsView";
import {Route, Switch} from 'react-router-dom'
import AboutView from "../resources/views/Frontend/AboutView";
import LoginView from "../resources/views/Auth/LoginView";
import RegisterView from "../resources/views/Auth/RegisterView";
import ForgotPasswordView from "../resources/views/Auth/ForgotPasswordView";
import ResetPasswordView from "../resources/views/Auth/ResetPasswordView";
import LessonView from "../resources/views/Frontend/LessonView";
import LessonsView from "../resources/views/Frontend/LessonsView";
import TestView from "../resources/views/Frontend/TestView";
import QuizView from "../resources/views/Frontend/QuizView";
import PrivateRoute from './PrivateRoute'
import GuestRoute from './GuestRoute'
// import My404View from "../resources/views/My404View";
import LogoutView from "../resources/views/Auth/LogoutView";

import CreateView from '../resources/views/Administrator/Lesson/CreateView'
import QuestionCreateView from '../resources/views/Administrator/Question/CreateView'
import UpdateView from '../resources/views/Administrator/Lesson/UpdateView'

export default class MainRoutePlace extends React.Component {

    GuestRouteGroup = (isAuthenticated) => {
        return (
            <Switch>
                <GuestRoute isAuthenticated={isAuthenticated} path="/login" component={LoginView}/>
                <GuestRoute isAuthenticated={isAuthenticated} path="/forgot" component={ForgotPasswordView}/>
                <GuestRoute isAuthenticated={isAuthenticated} path="/register" component={RegisterView}/>
                <GuestRoute isAuthenticated={isAuthenticated} path="/reset" component={ResetPasswordView}/>
            </Switch>
        )
    }

    PrivateRouteGroup = (isAuthenticated) => {
        return (
            <Switch>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/lesson/:id" component={LessonView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/lessons" component={LessonsView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/quiz" component={QuizView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/topics" component={TopicsView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/test" component={TestView}/>

                <PrivateRoute isAuthenticated={isAuthenticated} path="/logout" component={LogoutView}/>
                /*
                    Backend
                 */
                <PrivateRoute isAuthenticated={isAuthenticated} path="/lesson-create" component={CreateView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/lesson-edit/:id" component={UpdateView}/>

                <PrivateRoute isAuthenticated={isAuthenticated} path="/question-create" component={QuestionCreateView}/>
            </Switch>
        )
    }

    render() {
        const {isAuthenticated} = this.props

        return (
            <div className="main-route-place">
                <Route exact path="/" component={HomeView}/>
                <Route path="/about" component={AboutView}/>


                {this.GuestRouteGroup(isAuthenticated)}
                {this.PrivateRouteGroup(isAuthenticated)}


                {/*<Route path='/404' component={My404View}/>*/}
                {/*<Redirect from='*' to='/404'/>*/}

            </div>
        );
    }
}
