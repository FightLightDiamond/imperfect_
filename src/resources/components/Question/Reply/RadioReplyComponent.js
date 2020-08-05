import React from "react";

export default class RadioReplyComponent extends React.Component {
    render() {
        const {index, item, onRemoveQuestion, handleAnswerMultiChoice, handleReplyMultiChoice} = this.props

        return <tr key={index}>
            <td>
                <input
                    onChange={() => handleAnswerMultiChoice(index)}

                    checked={item.answer} name="answer" type="radio"/>
            </td>
            <td>
                <input
                    onChange={e => handleReplyMultiChoice(e, index)}
                    value={item.reply} type="text" className={'form-control'}/>
            </td>
            <td className={'text-right'}>
                <button onClick={() => onRemoveQuestion(index)}
                        className={'btn btn-sm btn-danger'}>Remove
                </button>
            </td>
        </tr>
    }
}
