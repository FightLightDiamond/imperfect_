import React, {useEffect, useState} from "react"
import "react-mde/lib/styles/css/react-mde-all.css"
import {connect} from "react-redux"
import {
    getQuestionAction, testSingleAction
} from "../../../../stores/redux/question/actions"
import ReplyComponent from "../../../components/Frontend/Question/ReplyComponent"
import Loading from "../../../components/common/Loading"
import CodeBlock from "../../../components/CodeBlock"
import ReactMarkdown from "react-markdown/with-html"


const ShowContainer = props => {
    const [answer, setAnswer] = useState(null)
    const {id, question, loading, history, getQuestionAction} = props

    useEffect(() => {
        getQuestionAction(id, history)
    }, [getQuestionAction, id, history]);

    const handleAnswer = (answer) => {
        setAnswer(answer)
    }

    return (
        <div>
            <h1>Show Question {id} {'' + answer}</h1>
            {
                !loading
                    ? <div>
                        {
                            question
                                ? 'Question không tồn tại'
                                : <div>
                                    <div className={'col-lg-12'}>
                                        <label>Question</label>
                                        <ReactMarkdown
                                            source={question.question}
                                            language={'php'}
                                            renderers={{code: CodeBlock}}
                                            escapeHtml={false}
                                        />
                                    </div>
                                    <ReplyComponent handleAnswer={handleAnswer}
                                                    type={question.type} replies={question.replies}/>
                                    <div className={'col-lg-12'}>
                                        <button onClick={() => {
                                            testSingleAction(id, answer, history)
                                        }} className={'btn btn-primary'}>Check
                                        </button>
                                    </div>
                                </div>
                        }
                    </div>
                    : <Loading/>
            }
        </div>
    )
}

const mapStateToProps = ({Question}) => {
    const {question, loading} = Question
    return {question, loading}
}

export default connect(
    mapStateToProps,
    {
        getQuestionAction,
        testSingleAction
    }
)(ShowContainer)
