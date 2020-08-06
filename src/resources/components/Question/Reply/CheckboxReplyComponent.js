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
            index, item, onRemoveReply,
            handleReply, handleAnswer
        } = this.props

        return (<tr key={index}>
            <td>
                <ReactMde
                    onChange={(e) => handleReply(e, index)}
                    value={item.reply}
                    // onChange={text => this.setState({question: text})}
                    selectedTab={this.state.tab}
                    onTabChange={text => this.setState({tab: text})}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />
                {/*<input onChange={(e) => handleReply(e.target.value, index)} value={item.reply} type="text" className={'form-control'}/>*/}
            </td>
            <td>
                <input onChange={(e) => handleAnswer(index)} checked={item.answer} name="answer" type="checkbox"/>
            </td>
            <td className={'text-right'}>
                <button onClick={() => onRemoveReply(index)} className={'btn btn-sm btn-danger'}>Remove</button>
            </td>
        </tr>)
    }
}
