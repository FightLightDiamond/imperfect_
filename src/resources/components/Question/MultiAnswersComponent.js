import React from "react";
import CheckboxReplyComponent from "./Reply/CheckboxReplyComponent";

export default class MultiAnswersComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multi_answer: [
                {answer: false, reply: ''},
            ]
        }
    }

    onAddReply = () => {
        this.setState({
            ...this.state, multi_answer: [...this.state.multi_answer, {answer: false, reply: '...'}]
        })

        this.props.handleMultiAnswer(this.state.multi_answer)
    }

    onRemoveReply = (index) => {
        const removed = this.state.multi_answer.filter((item, i) => {
            if (i !== index) {
                return item
            }
        });

        this.setState({
            ...this.state, multi_answer: removed
        })

        this.props.handleMultiAnswer(this.state.multi_answer)
    }

    handleReply = (reply, index) => {
        let multi_answer = this.state.multi_answer;
        multi_answer[index].reply = reply

        this.setState({
            ...this.state, multi_answer: multi_answer
        })

        this.props.handleMultiAnswer(this.state.multi_answer)
    }

    handleAnswer = (index) => {
        let multi_answer = this.state.multi_answer;
        multi_answer[index].answer = !multi_answer[index].answer

        this.setState({
            ...this.state, multi_answer: multi_answer
        })

        this.props.handleMultiAnswer(this.state.multi_answer)
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
                            <button onClick={() => this.onAddReply()} className={'btn btn-sm btn-primary'}>Add</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.multi_answer.map((item, index) => {
                        return <CheckboxReplyComponent
                            key={index}
                            item={item} index={index}
                            onRemoveReply={this.onRemoveReply}
                            handleReply={this.handleReply}
                            handleAnswer={this.handleAnswer}
                        />
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
