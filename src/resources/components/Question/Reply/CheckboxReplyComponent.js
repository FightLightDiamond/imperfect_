import React from "react";

export default class CheckboxReplyComponent extends React.Component {
    render() {
        const {index, item,  onRemoveQuestionMultiAnswer,
            handleReplyMultiAnswer, handleAnswerMultiAnswer} = this.props

        return (<tr key={index}>
            <td>
                <input onChange={() => handleReplyMultiAnswer()} checked={item.answer} name="answer" type="checkbox"/>
            </td>
            <td>
                <input onChange={() => handleAnswerMultiAnswer()} value={item.reply} type="text" className={'form-control'}/>
            </td>
            <td className={'text-right'}>
                <button onClick={()=> onRemoveQuestionMultiAnswer(index)} className={'btn btn-sm btn-danger'}>Remove</button>
            </td>
        </tr>)
    }
}
