import React from "react";
import {Switch} from 'react-router-dom'
import PrivateRoute from "../PrivateRoute";

import IndexLessonView from "../../resources/views/Administrator/Lesson/IndexView";
import CreateLessonView from "../../resources/views/Administrator/Lesson/CreateView";
import UpdateLessonView from "../../resources/views/Administrator/Lesson/UpdateView";

import CreateQuestionView from "../../resources/views/Administrator/Question/CreateView";
import UpdateQuestionView from "../../resources/views/Administrator/Question/UpdateView";
import QuestionView from "../../resources/views/Administrator/Question/ShowView";
import {
    ADMIN_LESSONS_PATH,
    ADMIN_LESSONS_CREATE_PATH,
    ADMIN_LESSONS_EDIT_PATH,

    ADMIN_QUESTION_PATH,
    ADMIN_QUESTION_CREATE_PATH,
    ADMIN_QUESTION_EDIT_PATH
} from '../RouteType/AdminRouteType'

const AdminRouteGroup = props => {
    const {isAuthenticated} = props

    return (
        <Switch>
            <PrivateRoute isAuthenticated={isAuthenticated} path={ADMIN_LESSONS_PATH} component={IndexLessonView}/>
            <PrivateRoute isAuthenticated={isAuthenticated} path={ADMIN_LESSONS_CREATE_PATH} component={CreateLessonView}/>
            <PrivateRoute isAuthenticated={isAuthenticated} path={ADMIN_LESSONS_EDIT_PATH} component={UpdateLessonView}/>

            <PrivateRoute isAuthenticated={isAuthenticated} path={ADMIN_QUESTION_CREATE_PATH} component={CreateQuestionView}/>
            <PrivateRoute isAuthenticated={isAuthenticated} path={ADMIN_QUESTION_EDIT_PATH} component={UpdateQuestionView}/>
            <PrivateRoute isAuthenticated={isAuthenticated} path={ADMIN_QUESTION_PATH} component={QuestionView}/>
        </Switch>
    )
}

export default AdminRouteGroup
