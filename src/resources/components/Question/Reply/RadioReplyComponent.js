import React, {useState} from "react";
import {converter} from "../../../../helpers/Markdown";
import ReactMde from "react-mde";
import {MULTI_CHOICE_TYPE} from "../../../../config/Question";

const RadioReplyComponent = props => {
    const [tab, setTab] = useState('write')

    const {index, item, onRemove, handleAnswer, handleReply, answer, type} = props

    return <tr key={index}>
        <td>{index + 1}</td>
        <td>
            <ReactMde
                onChange={e => handleReply(e, index)}
                value={item.content}
                selectedTab={tab}
                onTabChange={text => setTab(text)}
                generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
            />
        </td>
        <td className={'text-center'}>
            {type === MULTI_CHOICE_TYPE
                ? <input checked={answer === item.id ? 'checked' : ''}
                         onChange={() => handleAnswer(item.id)} name="answer" type='radio'/>
                : <input checked={answer.indexOf(item.id) !== -1 ? 'checked' : ''}
                         onChange={() => handleAnswer(item.id)} name="answer" type='checkbox'/>
            }
        </td>
        <td className={'text-right'}>
            <button onClick={() => onRemove(item.id)} className={'btn btn-sm btn-danger'}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
        </td>
    </tr>
}

export default RadioReplyComponent