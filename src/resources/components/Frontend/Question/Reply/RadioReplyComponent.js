import React from "react";
import CodeBlock from "../../../CodeBlock";
import ReactMarkdown from "react-markdown/with-html";

const RadioReplyComponent = props => {
    const {index, item, handleAnswer} = props

    return <tr key={index}>

        <td>
            <ReactMarkdown
                source={item.reply}
                language={'php'}
                renderers={{code: CodeBlock}}
                escapeHtml={false}
            />
        </td>
        <td className={'text-right'}>
            <input
                onChange={() => handleAnswer(index)}
                // checked={item.answer}
                name="answer" type="radio"/>
        </td>
    </tr>
}

export default RadioReplyComponent