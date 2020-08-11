import React from "react";
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


class CreateContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: TRUE_FALSE_TYPE,
            time: 15,
            status: 0,
            level: 1,
            question: '',
            answer: null,
            replies: [
                {id: uid(), content: ''},
                {id: uid(), content: ''},
                {id: uid(), content: ''},
                {id: uid(), content: ''},
            ],
            answers: {
                true_false: null,
                multi_choice: 0,
                multi_answer: [],
            },
        }
    }

    handleType = (type) => {
        switch (type) {
            case TRUE_FALSE_TYPE:
                this.setState({
                    ...this.state, answer: this.state.answers.true_false,
                    type: type
                })
                break
            case MULTI_ANSWER_TYPE:
                this.setState({
                    ...this.state, answer: this.state.answers.multi_answer,
                    type: type
                })
                break
            case MULTI_CHOICE_TYPE:
                this.setState({
                    ...this.state, answer: this.state.answers.multi_choice,
                    type: type
                })
                break
            default:
                throw new Error('Invalid type name: ')
        }
    }

    handleTime = (time) => {
        this.setState({
            ...this.state, time: time
        })
    }

    handleStatus = (status) => {
        this.setState({
            ...this.state, status: status
        })
    }

    handleLevel = (level) => {
        this.setState({
            ...this.state, level: level
        })
    }

    handleAnswer = answer => {
        switch (this.state.type) {
            case TRUE_FALSE_TYPE:
                this.setState({
                    ...this.state, answer: answer,
                    answers: {...this.state.answers, true_false: answer}
                })
                break
            case MULTI_ANSWER_TYPE:
                this.setState({
                    ...this.state, answer: answer,
                    answers: {...this.state.answers, multi_answer: answer}
                })
                break
            case MULTI_CHOICE_TYPE:
                this.setState({
                    ...this.state, answer: answer,
                    answers: {...this.state.answers, multi_choice: answer}
                })
                break
            default:
                throw new Error('Invalid type name: ')
        }
    }

    handleReplies = (replies, id = false) => {
        let answer = this.state.answer;
        let {true_false, multi_choice, multi_answer} = this.state.answers

        if (id) {
            if (id === true_false) {
                answer = true_false = null
            }

            if (id === multi_choice) {
                answer = multi_choice = 0
            }

            if (multi_answer.indexOf(id) !== -1) {
                // eslint-disable-next-line array-callback-return
                answer = multi_answer = multi_answer.filter(item => {
                    if (item !== id) return item
                });
            }

            this.setState({
                ...this.state,
                replies: replies,
                answer: answer,
                answers: {
                    ...this.state.answers,
                    true_false: true_false, multi_choice: multi_choice, multi_answer: multi_answer
                }
            })
        } else {
            this.setState({
                ...this.state, replies: replies
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Question CreateView</h2>

                <div className={'row'}>
                    <div className={'col-lg-12 form-group'}>
                        <label htmlFor="">Question</label>
                        <ReactMde
                            value={this.state.question}
                            onChange={text => this.setState({question: text})}
                            selectedTab={this.state.tab}
                            onTabChange={text => this.setState({tab: text})}
                            generateMarkdownPreview={markdown =>
                                Promise.resolve(converter.makeHtml(markdown))
                            }
                        />
                    </div>
                </div>

                <FilterComponent
                    time={this.state.time}
                    handleType={this.handleType}
                    handleTime={this.handleTime}
                    handleStatus={this.handleStatus}
                    handleLevel={this.handleLevel}
                />

                <div className={'row'}>
                    {
                        parseInt(this.state.type) === TRUE_FALSE_TYPE
                            ? <TrueFalseComponent
                                answer={this.state.answer}
                                handleReplies={this.handleReplies}
                                handleAnswer={this.handleAnswer}
                            />
                            :
                            <MultipleChoiceComponent
                                type={this.state.type}
                                answer={this.state.answer}
                                replies={this.state.replies}
                                handleAnswer={this.handleAnswer}
                                handleReplies={this.handleReplies}
                            />
                    }
                </div>

                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <button onClick={() => this.onCreate()} className={'btn btn-primary'}>Save</button>
                    </div>
                </div>
            </div>
        );
    }

    onCreate = () => {
        const {createQuestionAction} = this.props
        const question = this.state;

        createQuestionAction(question);
    }
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
