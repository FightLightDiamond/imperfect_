import React from "react";
import {converter} from "../../../../helpers/Markdown";
import ReactMde from "react-mde";
import {MULTI_CHOICE_TYPE} from "../../../../config/Question";

export default class RadioReplyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: "write",
        };
    }

    render() {
        const {index, item, onRemove, handleAnswer, handleReply, answer, type} = this.props

        return <tr key={index}>
            <td>
                <ReactMde
                    onChange={e => handleReply(e, index)}
                    value={item.content}
                    selectedTab={this.state.tab}
                    onTabChange={text => this.setState({tab: text})}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />
            </td>
            <td>
                {type === MULTI_CHOICE_TYPE
                    ? <input checked={answer === item.id ? 'checked' : '' }
                             onChange={() => handleAnswer(item.id)} name="answer" type='radio'/>
                    : <input checked={answer.indexOf(item.id) !== -1  ? 'checked' : '' }
                             onChange={() => handleAnswer(item.id)} name="answer" type='checkbox'/>
                }
            </td>
            <td className={'text-right'}>
                <button  onClick={() => onRemove(item.id)} className={'btn btn-sm btn-danger'}>Remove</button>
            </td>
        </tr>
    }
}
