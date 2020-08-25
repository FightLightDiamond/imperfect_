import React from "react";

export default class TrueFalseComponent extends React.Component {
    onChangeAnswer = (answer) => {
        const {handleAnswer} = this.props
        handleAnswer(answer)
    }

    render() {
        const {answer} = this.props

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
                                onChange={() => this.onChangeAnswer(1)}
                                checked={answer === 1 ? 'checked' : ''}
                                name="answer" type="radio"/>
                        </td>
                    </tr>
                    <tr>
                        <td>False</td>
                        <td className={'text-right'}>
                            <input
                                onChange={() => this.onChangeAnswer(0)}
                                checked={answer === 0 ? 'checked' : ''}
                                name="answer" type="radio"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
