import React, {useEffect} from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from 'react-markdown/with-html'
import CodeBlock from "../../../components/CodeBlock";
import {connect} from "react-redux";
import {getLessonAction} from "../../../../stores/redux/lesson/actions";
import Loading from "../../../components/common/Loading";

const ShowContainer = (props) => {
    const {getLessonAction, id, loading, lesson, history} = props

    useEffect(() => {
        getLessonAction(id, history)
    }, []);

    return (
        loading ? <Loading/> : <div>
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
    );
}

const mapStateToProps = ({Lesson}) => {
    const {lesson} = Lesson;
    return {lesson};
};

export default connect(
    mapStateToProps,
    {
        getLessonAction
    }
)(ShowContainer);
