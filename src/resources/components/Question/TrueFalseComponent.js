import React from "react";

const TrueFalseComponent = props => {
    const {answer, handleAnswer} = props

    const onChangeAnswer = (answer) => {
        handleAnswer(answer)
    }

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
                            onChange={() => onChangeAnswer(1)}
                            checked={answer === 1 ? 'checked' : ''}
                            name="answer" type="radio"/>
                    </td>
                </tr>
                <tr>
                    <td>False</td>
                    <td className={'text-right'}>
                        <input
                            onChange={() => onChangeAnswer(0)}
                            checked={answer === 0 ? 'checked' : ''}
                            name="answer" type="radio"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TrueFalseComponent
