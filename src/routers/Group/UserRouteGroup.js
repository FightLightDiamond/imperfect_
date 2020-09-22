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
            <PrivateRoute isUser={isUser} path={LESSON_PATH} component={LessonView}/>
            {/*<PrivateRoute isUser={isUser} path="/lessons" component={LessonsView}/>*/}
            <PrivateRoute isUser={isUser} path={QUIZ_PATH} component={QuizView}/>
            <PrivateRoute isUser={isUser} path={TOPICS_PATH} component={TopicsView}/>
            <PrivateRoute isUser={isUser} path={TEST_PATH} component={TestView}/>

            <PrivateRoute isUser={isUser} path={LOGOUT_PATH} component={LogoutView}/>
        </Switch>
    );
}

export default UserRouteGroup