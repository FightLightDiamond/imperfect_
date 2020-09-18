import React from "react";

const TrueFalseComponent = props => {
    const {handleAnswer} = props

    return (
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
                        onChange={() => handleAnswer(1)}
                        name="answer" type="radio"/>
                </td>
            </tr>
            <tr>
                <td>False</td>
                <td className={'text-right'}>
                    <input
                        onChange={() => handleAnswer(0)}
                        name="answer" type="radio"/>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default TrueFalseComponent
