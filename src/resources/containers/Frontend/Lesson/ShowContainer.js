import React, {useEffect} from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from 'react-markdown/with-html'
import CodeBlock from "../../../components/CodeBlock";
import {connect} from "react-redux";
import {
    getFileLessonAction,
    updateFileLessonAction,
    deleteFileLessonAction
} from "../../../../stores/redux/file-lesson/actions";
import {getLessonAction} from "../../../../stores/redux/lesson/actions";
import Loading from "../../../components/common/Loading";

const ShowContainer = props => {
    const {id, lesson, loading, getLessonAction} = props

    useEffect(() => {
        getLessonAction(id)
    }, [getLessonAction, id])

    console.log('render componentDidMount', lesson)

    return (
        !loading ? <div>
                <h1>{lesson.title}</h1>
                <ReactMarkdown
                    source={lesson.intro}
                    language={'php'}
                    renderers={{code: CodeBlock}}
                    escapeHtml={false}
                />
                <ReactMarkdown
                    source={lesson.content}
                    language={'php'}
                    renderers={{code: CodeBlock}}
                    escapeHtml={false}
                />
            </div>
            : <Loading/>
    );
}

const mapStateToProps = ({Lesson}) => {
    const {lesson, loading, error} = Lesson;
    return {lesson, loading, error};
};

export default connect(
    mapStateToProps,
    {
        getLessonAction,
        getFileLessonAction, updateFileLessonAction, deleteFileLessonAction
    }
)(ShowContainer);
