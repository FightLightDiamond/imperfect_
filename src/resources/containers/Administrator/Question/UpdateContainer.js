import React, {useEffect, useState} from "react"
import "react-mde/lib/styles/css/react-mde-all.css"
import {connect} from "react-redux"
import {
    getFileLessonAction,
    updateFileLessonAction,
    deleteFileLessonAction
} from "../../../../stores/redux/file-lesson/actions"
import {getLessonAction, updateLessonAction} from "../../../../stores/redux/lesson/actions"
import Editor from "../../../components/Lesson/Editor"
import Loading from "../../../components/common/Loading"

const CreateContainer = props => {
    const {id, lesson, loading, history, getLessonAction, deleteFileLessonAction, updateLessonAction} = props

    useEffect(() => {
        getLessonAction(id, history)
    }, []);

    return (
        !loading ? <div>
            <Editor
                lesson={lesson}
                updateLessonAction={updateLessonAction}
                deleteFileLessonAction={deleteFileLessonAction}
            />
        </div> : <Loading/>
    )
}

const mapStateToProps = ({fileLesson, Lesson}) => {
    const {lesson, loading, error} = Lesson

    return {fileLesson, lesson, loading, error}
}

export default connect(
    mapStateToProps,
    {
        getLessonAction, updateLessonAction,
        getFileLessonAction, updateFileLessonAction, deleteFileLessonAction
    }
)(CreateContainer)
