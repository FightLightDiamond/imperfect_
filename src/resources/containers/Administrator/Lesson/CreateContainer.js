import React, {useEffect} from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import {connect} from "react-redux";
import {
    getFileLessonAction,
    updateFileLessonAction,
    deleteFileLessonAction
} from "../../../../stores/redux/file-lesson/actions";
import {createLessonAction, updateLessonAction} from "../../../../stores/redux/lesson/actions";
import Editor from "../../../components/Lesson/Editor";
import Loading from "../../../components/common/Loading";


const CreateContainer = (props) => {
    const {
        history, loading, createLessonAction,
    } = props

    useEffect(() => {
        createLessonAction({section_id: 1, title: 'a', intro: 'b'}, history)
    }, [createLessonAction, history]);

    return (
        !loading ?
            <div>
                <Editor
                    {...props}
                />
            </div>
            : <Loading/>
    );
}

const mapStateToProps = ({fileLesson, Lesson}) => {
    const {lesson, loading, error} = Lesson;

    return {fileLesson, lesson, loading, error};
};

export default connect(
    mapStateToProps,
    {
        createLessonAction, updateLessonAction,
        getFileLessonAction, updateFileLessonAction, deleteFileLessonAction
    }
)(CreateContainer);
