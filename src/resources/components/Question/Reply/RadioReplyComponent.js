import React from "react";
import {converter} from "../../../../helpers/Markdown";
import ReactMde from "react-mde";

export default class RadioReplyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: "write",
        };
    }

    render() {
        const {index, item, onRemove, handleAnswer, handleReply} = this.props

        return <tr key={index}>
            <td>
                <ReactMde
                    onChange={e => handleReply(e, index)}
                    value={item.reply}
                    selectedTab={this.state.tab}
                    onTabChange={text => this.setState({tab: text})}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />
                {/*<input
                    onChange={e => handleReply(e.target.value, index)}
                    value={item.reply} type="text" className={'form-control'}/>*/}
            </td>
            <td>
                <input
                    onChange={() => handleAnswer(index)}
                    checked={item.answer} name="answer" type="radio"/>
            </td>
            <td className={'text-right'}>
                <button onClick={() => onRemove(index)}
                        className={'btn btn-sm btn-danger'}>Remove
                </button>
            </td>
        </tr>
    }
}
