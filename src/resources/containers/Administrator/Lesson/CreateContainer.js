import React from "react";
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


class CreateContainer extends React.Component {

    componentDidMount() {
        const {createLessonAction,} = this.props
        createLessonAction({section_id: 1, title: 'a', intro: 'b'})
    }

    render() {
        const {lesson, deleteFileLessonAction, updateLessonAction, loading, error} = this.props

        return (
            !loading ?
                <div>
                    <Editor
                        lesson={lesson}
                        updateLessonAction={updateLessonAction}
                        deleteFileLessonAction={deleteFileLessonAction}
                    />
                </div>
                : <Loading/>
        );
    }
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
