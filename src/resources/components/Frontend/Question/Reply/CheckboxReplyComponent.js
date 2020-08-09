import React from "react";
import CodeBlock from "../../../CodeBlock";
import ReactMarkdown from "react-markdown/with-html";

export default class CheckboxReplyComponent extends React.Component {

    render() {
        const {
            index, item,
            handleAnswer
        } = this.props

        return (<tr key={index}>
            <td>
                <ReactMarkdown
                    source={item.reply}
                    language={'php'}
                    renderers={{code: CodeBlock}}
                    escapeHtml={false}
                />
            </td>
            <td className={'text-right'}>
                <input onChange={() => handleAnswer(index)}
                       // checked={item.answer}
                       name="answer" type="checkbox"/>
            </td>
        </tr>)
    }
}
