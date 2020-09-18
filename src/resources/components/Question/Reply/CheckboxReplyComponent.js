import React, {useState} from "react";
import ReactMde from "react-mde";
import {converter} from "../../../../helpers/Markdown";

const CheckboxReplyComponent = props => {
    const [tab, setTab] = useState('write')

    const {
        index, item, onRemove,
        handleReply, handleAnswer
    } = props

    return (<tr key={index}>
        <td>
            <ReactMde
                onChange={(e) => handleReply(e, index)}
                value={item.reply}
                selectedTab={tab}
                onTabChange={text => setTab( text)}
                generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
            />
        </td>
        <td>
            <input onChange={e => handleAnswer(index)} checked={item.answer} name="answer" type="checkbox"/>
        </td>
        <td className={'text-right'}>
            <button onClick={() => onRemove(index)} className={'btn btn-sm btn-danger'}>Remove</button>
        </td>
    </tr>)
}

export default CheckboxReplyComponent