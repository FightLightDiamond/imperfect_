import React from "react";
import MultipleChoiceComponent from "../../../components/Question/MultipleChoiceComponent";
import TrueFalseComponent from "../../../components/Question/TrueFalseComponent";
import ChooseManyAnswersComponent from "../../../components/Question/ChooseManyAnswersComponent";
import FilterComponent from "../../../components/Question/FilterComponent";

export default class CreateView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 1,
            time: 15,
            status: 0,
            level: 1,
            true_false: {},
            multi_choice: [
                {answer: false, reply: ''},
            ],
            multi_answer: [
                {answer: false, reply: ''},
            ]
        }
    }

    handleType = (type) => {
        this.setState({
            ...this.state, type: type
        })
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

    handleAnswerTrueFalse = (true_false) => {
        this.setState({
            ...this.state, true_false: true_false
        })
    }

    handleMultiChoice = (multi_choice) => {
        this.setState({
            ...this.state, multi_choice: multi_choice
        })
    }


    onAddQuestionMultiAnswer = () => {
        this.setState({
            ...this.state, multi_answer: [...this.state.multi_answer, {answer: false, reply: '...'}]
        })
    }

    onRemoveQuestionMultiAnswer = (index) => {
        const removed = this.state.multi_answer.filter((item, i) => {
            if (i !== index) {
                return item
            }
        });

        this.setState({
            ...this.state, multi_answer: removed
        })
    }

    handleReplyMultiAnswer = (e, index) => {
        let multi_answer = this.state.multi_answer;
        multi_answer[index].reply = e.target.value

        this.setState({
            ...this.state, multi_answer: multi_answer
        })
    }

    handleAnswerMultiAnswer = index => {
        let multi_answer = this.state.multi_answer.map((quest, i) => {
            quest.answer = i === index;

            return quest
        })

        this.setState({
            ...this.state, multi_answer: multi_answer
        })
    }

    render() {
        return (
            <div>
                <h2>Question CreateView</h2>
                {JSON.stringify(this.state)}

                <FilterComponent
                    type={this.state.type}
                    time={this.state.time}
                    status={this.state.status}
                    level={this.state.level}
                    handleType={this.handleType}
                    handleTime={this.handleTime}
                    handleStatus={this.handleStatus}
                    handleLevel={this.handleLevel}
                />

                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <label htmlFor="">Question</label>
                    </div>

                    {
                        parseInt(this.state.type) === 1
                            ? <TrueFalseComponent
                                handleAnswerTrueFalse={this.handleAnswerTrueFalse}
                            />
                            : parseInt(this.state.type) === 2
                            ? <MultipleChoiceComponent
                                handleMultiChoice={this.handleMultiChoice}
                                // multi_choice={this.state.multi_choice}
                                // onAddQuestion={this.onAddQuestionMultiChoice}
                                // onRemoveQuestion={this.onRemoveQuestionMultiChoice}
                                // handleReplyMultiChoice={this.handleReplyMultiChoice}
                                // handleAnswerMultiChoice={this.handleAnswerMultiChoice}
                            />
                            : <ChooseManyAnswersComponent
                                multi_answer={this.state.multi_answer}
                                onAddQuestionMultiAnswer={this.onAddQuestionMultiAnswer}
                                onRemoveQuestionMultiAnswer={this.onRemoveQuestionMultiAnswer}
                                handleReplyMultiAnswer={this.handleReplyMultiAnswer}
                                handleAnswerMultiAnswer={this.handleAnswerMultiAnswer}
                            />
                    }
                </div>
            </div>
        );
    }
}
