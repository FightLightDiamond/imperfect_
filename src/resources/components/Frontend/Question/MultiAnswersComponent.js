import React from "react";
import CheckboxReplyComponent from "./Reply/CheckboxReplyComponent";
import _ from "lodash";

export default class MultiAnswersComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: []
        }
    }

    handleAnswer = (id) => {
        let answer = this.state.answer

        answer = _.xor(answer, [id])

        this.setState({
            ...this.state, answer: answer
        })

        this.props.handleAnswer(answer)
    }

    render() {
        const {replies} = this.props

        return (
            <div>
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
            </div>

        )
    }
}
