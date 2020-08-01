import React from "react";
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

class ShowContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            title: '',
            intro: '',
            content: '',
        };
    }

    componentDidMount() {
        const {getLessonAction} = this.props
        getLessonAction(this.state.id)

    }

    render() {
        const {lesson, loading, error} = this.props
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
