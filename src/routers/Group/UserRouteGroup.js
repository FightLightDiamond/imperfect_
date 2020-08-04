import React from "react";
import {Switch} from 'react-router-dom'
import PrivateRoute from "../PrivateRoute";
import LessonView from "../../resources/views/Frontend/LessonView";
// import LessonsView from "../../resources/views/Frontend/LessonsView";
import QuizView from "../../resources/views/Frontend/QuizView";
import TopicsView from "../../resources/views/Frontend/TopicsView";
import TestView from "../../resources/views/Frontend/TestView";
import LogoutView from "../../resources/views/Auth/LogoutView";


export default class UserRouteGroup extends React.Component {
    render() {
        const {isAuthenticated} = this.props

        return (
            <Switch>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/lesson/:id" component={LessonView}/>
                {/*<PrivateRoute isAuthenticated={isAuthenticated} path="/lessons" component={LessonsView}/>*/}
                <PrivateRoute isAuthenticated={isAuthenticated} path="/quiz" component={QuizView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/topics" component={TopicsView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/test" component={TestView}/>

                <PrivateRoute isAuthenticated={isAuthenticated} path="/logout" component={LogoutView}/>
            </Switch>
        );
    }
}
