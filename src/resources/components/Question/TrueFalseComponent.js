import React from "react";

export default class TrueFalseComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            true_false: {correct: false, incorrect: false},
        }
    }
    onChangeAnswer = (answer) => {
        let true_false = this.state.true_false

        if (answer) {
            true_false.correct = true
            true_false.incorrect = false
        } else {
            true_false.incorrect = true
            true_false.correct = false
        }

        const {handleAnswerTrueFalse} = this.props

        handleAnswerTrueFalse(answer)
    }

    render() {
        return (
            <div className={'col-lg-12'}>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Reply</th>
                        <th className={'text-right'}>Answer</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>True</td>
                        <td className={'text-right'}>
                            <input
                                onChange={() => this.onChangeAnswer(true)}
                                checked={this.state.true_false.correct} name="answer" type="radio"/>
                        </td>
                    </tr>
                    <tr>
                        <td>False</td>
                        <td className={'text-right'}>
                            <input
                                onChange={() => this.onChangeAnswer(false)}
                                value={this.state.true_false.incorrect} name="answer" type="radio"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
