import React from "react";
import {Switch} from 'react-router-dom'
import PrivateRoute from "../PrivateRoute";

import IndexLessonView from "../../resources/views/Administrator/Lesson/IndexView";
import CreateLessonView from "../../resources/views/Administrator/Lesson/CreateView";
import UpdateLessonView from "../../resources/views/Administrator/Lesson/UpdateView";

import CreateQuestionView from "../../resources/views/Administrator/Question/CreateView";
import UpdateQuestionView from "../../resources/views/Administrator/Question/UpdateView";
import QuestionView from "../../resources/views/Administrator/Question/ShowView";


export default class AdminRouteGroup extends React.Component {
    render() {
        const {isAuthenticated} = this.props

        return (
            <Switch>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/lessons" component={IndexLessonView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/lesson-create" component={CreateLessonView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/lesson-edit/:id" component={UpdateLessonView}/>

                <PrivateRoute isAuthenticated={isAuthenticated} path="/question-create" component={CreateQuestionView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/question-edit/:id" component={UpdateQuestionView}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/question/:id" component={QuestionView}/>
            </Switch>
        );
    }
}
