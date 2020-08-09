import React from "react";
import CodeBlock from "../../../CodeBlock";
import ReactMarkdown from "react-markdown/with-html";

export default class RadioReplyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: "write",
        };
    }

    render() {
        const {index, item, handleAnswer} = this.props

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
}
