import React from "react";
import CheckboxReplyComponent from "./Reply/CheckboxReplyComponent";

export default class MultiAnswersComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: []
        }
    }

    componentDidMount() {
        const {replies} = this.props
        let answer = []

        replies.map((item, index) => {
            answer[index] = false
        })

        this.setState({
            ...this.state, answer: answer
        })
    }

    handleAnswer = (index) => {
        let answer = this.state.answer;
        answer[index] = !answer[index]

        this.setState({
            ...this.state, answer: answer
        })

        this.props.handleAnswer(answer)
    }

    render() {
        const {replies} = this.props

        return (
            <table className={'table'}>
                <tbody>
                {replies.map((item, index) => {
                    return <CheckboxReplyComponent
                        key={index}
                        item={item} index={index}
                        handleAnswer={this.handleAnswer}
                    />
                })}
                </tbody>
            </table>
        )
    }
}
