import React from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import {connect} from "react-redux";
import {
    getQuestionAction
} from "../../../../stores/redux/question/actions";
import ReplyComponent from "../../../components/Frontend/Question/ReplyComponent";
import Loading from "../../../components/common/Loading";
import CodeBlock from "../../../components/CodeBlock";
import ReactMarkdown from "react-markdown/with-html";


class ShowContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            answer: null,
        };
    }

    componentDidMount() {
        const {getQuestionAction} = this.props
        getQuestionAction(this.state.id)
    }

    handleAnswer = (answer) => {
        this.setState({
            answer: answer
        })
    }

    render() {
        const {id, question, loading} = this.props

        return (
            <div>
                <h1>Show Question {id} {'' + this.state.answer}</h1>
                { !loading ?
                    <div>
                        <div className={'col-lg-12'}>
                            <label htmlFor="">Question</label>
                            <ReactMarkdown
                                source={question.question}
                                language={'php'}
                                renderers={{code: CodeBlock}}
                                escapeHtml={false}
                            />
                        </div>
                        <ReplyComponent handleAnswer={this.handleAnswer}
                                        type={question.type} replies={question.replies}/>
                    </div>
                    : <Loading/> }
            </div>
        );
    }
}

const mapStateToProps = ({Question}) => {
    const {question, loading} = Question;
    return {question, loading};
};

export default connect(
    mapStateToProps,
    {
        getQuestionAction
    }
)(ShowContainer);
