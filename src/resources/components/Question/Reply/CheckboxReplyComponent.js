import React from "react";
import ReactMde from "react-mde";
import {converter} from "../../../../helpers/Markdown";

export default class CheckboxReplyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: "write",
        };
    }

    render() {
        const {
            index, item, onRemove,
            handleReply, handleAnswer
        } = this.props

        return (<tr key={index}>
            <td>
                <ReactMde
                    onChange={(e) => handleReply(e, index)}
                    value={item.reply}
                    selectedTab={this.state.tab}
                    onTabChange={text => this.setState({tab: text})}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />
            </td>
            <td>
                <input onChange={(e) => handleAnswer(index)} checked={item.answer} name="answer" type="checkbox"/>
            </td>
            <td className={'text-right'}>
                <button onClick={() => onRemove(index)} className={'btn btn-sm btn-danger'}>Remove</button>
            </td>
        </tr>)
    }
}
