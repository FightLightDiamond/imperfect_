import React, {useState} from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import {connect} from "react-redux";
import {createQuestionAction} from '../../../../stores/redux/question/actions'
import ReactMde from "react-mde";
import {converter} from "../../../../helpers/Markdown";
import FilterComponent from "../../../components/Question/FilterComponent";
import TrueFalseComponent from "../../../components/Question/TrueFalseComponent";
import MultipleChoiceComponent from "../../../components/Question/MultipleChoiceComponent";
import uid from "uid";
import {TRUE_FALSE_TYPE, MULTI_ANSWER_TYPE, MULTI_CHOICE_TYPE} from "../../../../config/Question";


const CreateContainer = props => {
    const [type, setType] = useState(TRUE_FALSE_TYPE)
    const [time, setTime] = useState(15)
    const [status, setStatus] = useState(0)
    const [level, setLevel] = useState(1)
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState(null)
    const [tab, setTab] = useState(null)
    const [replies, setReplies] = useState([
        {id: uid(), content: ''},
        {id: uid(), content: ''},
        {id: uid(), content: ''},
        {id: uid(), content: ''},
    ])
    const [answers, setAnswers] = useState({
        true_false: null,
        multi_choice: 0,
        multi_answer: [],
    })

    const {createQuestionAction, history} = props

    const handleType = type => {
        switch (type) {
            case TRUE_FALSE_TYPE:
                setAnswer(answers.true_false)
                setType(type)
                break
            case MULTI_ANSWER_TYPE:
                setAnswer(answers.multi_answer)
                setType(type)
                break
            case MULTI_CHOICE_TYPE:
                setAnswer(answers.multi_choice)
                setType(type)
                break
            default:
                throw new Error('Invalid type name: ')
        }
    }

    const handleTime = (time) => {
        setTime(time)
    }

    const handleStatus = (status) => {
        setStatus(status)
    }

    const handleLevel = (level) => {
        setLevel(level)
    }

    const handleAnswer = answer => {
        switch (type) {
            case TRUE_FALSE_TYPE:
                setAnswer(answer)
                setAnswers({...answers, true_false: answer})
                break
            case MULTI_ANSWER_TYPE:
                setAnswer(answer)
                setAnswers({...answers, multi_answer: answer})
                break
            case MULTI_CHOICE_TYPE:
                setAnswer(answer)
                setAnswers({...answers, multi_choice: answer})
                break
            default:
                throw new Error('Invalid type name: ')
        }
    }

    const handleReplies = (replies, id = false) => {
        let newAnswer = answer;
        let {true_false, multi_choice, multi_answer} = answers

        if (id) {
            if (id === true_false) {
                newAnswer = true_false = null
            }

            if (id === multi_choice) {
                newAnswer = multi_choice = 0
            }

            if (multi_answer.indexOf(id) !== -1) {
                // eslint-disable-next-line array-callback-return
                newAnswer = multi_answer = multi_answer.filter(item => {
                    if (item !== id) return item
                });
            }

            setReplies(replies)
            setAnswer(newAnswer)
            setAnswers({true_false: true_false, multi_choice: multi_choice, multi_answer: multi_answer})
        } else {
            setReplies(replies)
        }
    }

    const onCreate = () => {
        let newQuestion = {
            type: type,
            time: time,
            status: status,
            level: level,
            question: question,
            answer: answer,
        }

        if (parseInt(type) !== TRUE_FALSE_TYPE) {
            newQuestion.replies = replies
        }

        createQuestionAction(newQuestion, history);
    }

    return (
        <div>
            <h2>Question CreateView</h2>
            <div className={'row'}>
                <div className={'col-lg-12 form-group'}>
                    <label>Question</label>
                    <ReactMde
                        value={question}
                        onChange={text => setQuestion(text)}
                        selectedTab={tab}
                        onTabChange={text =>  setTab(text)}
                        generateMarkdownPreview={markdown =>
                            Promise.resolve(converter.makeHtml(markdown))
                        }
                    />
                </div>
            </div>

            <FilterComponent
                time={time}
                handleType={handleType}
                handleTime={handleTime}
                handleStatus={handleStatus}
                handleLevel={handleLevel}
            />

            <div className={'row'}>
                {
                    parseInt(type) === TRUE_FALSE_TYPE
                        ? <TrueFalseComponent
                            answer={answer}
                            handleReplies={handleReplies}
                            handleAnswer={handleAnswer}
                        />
                        :
                        <MultipleChoiceComponent
                            type={type}
                            answer={answer}
                            replies={replies}
                            handleAnswer={handleAnswer}
                            handleReplies={handleReplies}
                        />
                }
            </div>

            <div className={'row'}>
                <div className={'col-lg-12'}>
                    <button onClick={() => onCreate()} className={'btn btn-primary'}>Save</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({Question}) => {
    const {question, loading, error} = Question;
    return {question, loading, error};
};

export default connect(
    mapStateToProps,
    {
        createQuestionAction
    }
)(CreateContainer);
