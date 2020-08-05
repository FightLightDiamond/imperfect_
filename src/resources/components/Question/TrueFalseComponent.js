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

        handleAnswerTrueFalse(true_false)
    }

    render() {
        return (
            <div className={'col-lg-12'}>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Answer</th>
                        <th>Reply</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <input
                                onChange={() => this.onChangeAnswer(true)}
                                checked={this.state.true_false.correct} name="answer" type="radio"/>
                        </td>
                        <td>True</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                onChange={() => this.onChangeAnswer(false)}
                                value={this.state.true_false.incorrect} name="answer" type="radio"/>
                        </td>
                        <td>False</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
