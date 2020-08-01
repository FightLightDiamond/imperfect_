import React from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import {connect} from "react-redux";
import {
    getFileLessonAction,
    updateFileLessonAction,
    deleteFileLessonAction
} from "../../../../stores/redux/file-lesson/actions";
import {getLessonAction, updateLessonAction} from "../../../../stores/redux/lesson/actions";
import Editor from "../../../components/Lesson/Editor";
import Loading from "../../../components/common/Loading";

class CreateContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            intro: '',
            content: '',
            tab: "write",
        };
    }

    componentDidMount() {
        const {getLessonAction, id} = this.props
        getLessonAction(id)

        const {lesson} = this.props

        console.log('render', lesson)
    }

    render() {
        const {lesson, loading, error, deleteFileLessonAction, updateLessonAction} = this.props

        return (
            !loading ? <div>
                <Editor
                    lesson={lesson}
                    updateLessonAction={updateLessonAction}
                    deleteFileLessonAction={deleteFileLessonAction}
                />
            </div> : <Loading/>
        );
    }

    onUpdate() {
        const {updateLessonAction} = this.props
        const {id} = this.props.lesson
        const {title, intro, content} = this.state

        alert('onUpdate');

        updateLessonAction(id, {title, intro, content})
    }
}

const mapStateToProps = ({fileLesson, Lesson}) => {
    const {lesson, loading, error} = Lesson;

    return {fileLesson, lesson, loading, error};
};

export default connect(
    mapStateToProps,
    {
        getLessonAction, updateLessonAction,
        getFileLessonAction, updateFileLessonAction, deleteFileLessonAction
    }
)(CreateContainer);
