import React from "react";
import {Switch} from 'react-router-dom'
import PrivateRoute from "../PrivateRoute";
import LessonView from "../../resources/views/Frontend/LessonView";
// import LessonsView from "../../resources/views/Frontend/LessonsView";
import QuizView from "../../resources/views/Frontend/QuizView";
import TopicsView from "../../resources/views/Frontend/TopicsView";
import TestView from "../../resources/views/Frontend/TestView";
import LogoutView from "../../resources/views/Auth/LogoutView";
import {
    LESSON_PATH,
    QUIZ_PATH,
    TOPICS_PATH,
    TEST_PATH,
    LOGOUT_PATH
} from '../RouteType/UserRouteType'

const UserRouteGroup = props => {
    const {isUser} = props
    return (
        <Switch>
            <PrivateRoute isAuthenticated={isUser} path={LESSON_PATH} component={LessonView}/>
            {/*<PrivateRoute isAuthenticated{isUser} path="/lessons" component={LessonsView}/>*/}
            <PrivateRoute isAuthenticated={isUser} path={QUIZ_PATH} component={QuizView}/>
            <PrivateRoute isAuthenticated={isUser} path={TOPICS_PATH} component={TopicsView}/>
            <PrivateRoute isAuthenticated={isUser} path={TEST_PATH} component={TestView}/>

            <PrivateRoute isAuthenticated={isUser} path={LOGOUT_PATH} component={LogoutView}/>
        </Switch>
    );
}

export default UserRouteGroup