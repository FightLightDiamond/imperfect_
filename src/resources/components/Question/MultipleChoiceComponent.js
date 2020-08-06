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

    onAdd = () => {
        this.setState({
            ...this.state, multi_choice: [...this.state.multi_choice, {answer: false, reply: '...'}]
        })

        this.props.handleMultiChoice(this.state.multi_choice)
    }

    onRemove = (index) => {
        const removed = this.state.multi_choice.filter((item, i) => {
            if (i !== index) {
                return item
            }
        });

        this.setState({
            ...this.state, multi_choice: removed
        })

        this.props.handleMultiChoice(this.state.multi_choice)
    }

    handleReply = (text, index) => {
        let multi_choice = this.state.multi_choice;
        multi_choice[index].reply = text

        this.setState({
            ...this.state, multi_choice: multi_choice
        })

        this.props.handleMultiChoice(this.state.multi_choice)
    }

    handleAnswer = index => {
        let multi_choice = this.state.multi_choice.map((quest, i) => {
            quest.answer = i === index;

            return quest
        })

        this.setState({
            ...this.state, multi_choice: multi_choice
        })

        this.props.handleMultiChoice(this.state.multi_choice)
    }

    render() {
        return (
            <div className={'col-lg-12'}>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Reply</th>
                        <th>Answer</th>
                        <th className={'text-right'}>
                            <button onClick={() => this.onAdd()}
                                    className={'btn btn-sm btn-primary'}>Add
                            </button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.multi_choice.map((item, index) => {
                            return <RadioReplyComponent
                                key={index}
                                onRemove={this.onRemove}
                                handleReply={this.handleReply}
                                handleAnswer={this.handleAnswer}
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
