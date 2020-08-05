import React from "react";
import RadioReplyComponent from "./Reply/RadioReplyComponent";

export default class MultipleChoiceComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multi_choice: [
                {answer: false, reply: ''},
            ]
        }
    }

    onAddQuestionMultiChoice = () => {
        this.setState({
            ...this.state, multi_choice: [...this.state.multi_choice, {answer: false, reply: '...'}]
        })
    }

    onRemoveQuestionMultiChoice = (index) => {
        const removed = this.state.multi_choice.filter((item, i) => {
            if (i !== index) {
                return item
            }
        });

        this.setState({
            ...this.state, multi_choice: removed
        })
    }

    handleReplyMultiChoice = (e, index) => {
        let multi_choice = this.state.multi_choice;
        multi_choice[index].reply = e.target.value

        this.setState({
            ...this.state, multi_choice: multi_choice
        })
    }

    handleAnswerMultiChoice = index => {
        let multi_choice = this.state.multi_choice.map((quest, i) => {
            quest.answer = i === index;

            return quest
        })

        this.setState({
            ...this.state, multi_choice: multi_choice
        })
    }

    render() {
        const {multi_choice, onAddQuestion, onRemoveQuestion, handleReplyMultiChoice, handleAnswerMultiChoice} = this.props

        return (
            <div className={'col-lg-12'}>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Answer</th>
                        <th>Reply</th>
                        <th className={'text-right'}>
                            <button onClick={() => onAddQuestion()}
                                    className={'btn btn-sm btn-primary'}>Add
                            </button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        multi_choice.map((item, index) => {
                            return <RadioReplyComponent
                                key={index}
                                onRemoveQuestion={onRemoveQuestion}
                                handleReplyMultiChoice={handleReplyMultiChoice}
                                handleAnswerMultiChoice={handleAnswerMultiChoice}
                                item={item}
                                index={index}
                            />
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
