import React from "react";
import RadioReplyComponent from "./Reply/RadioReplyComponent";
import uid from 'uid';
import _ from 'lodash'
import {MULTI_ANSWER_TYPE} from "../../../config/Question";


export default class MultipleChoiceComponent extends React.Component {
    onAdd = () => {
        const {replies} = this.props
        const id = uid()

        this.props.handleReplies([...replies, {id, content: ''}])
    }

    onRemove = (id) => {
        let {replies} = this.props

        // eslint-disable-next-line array-callback-return
        const removed = replies.filter(item => {
            if (item.id !== id) return item
        });

        this.props.handleReplies(removed, id)
    }

    handleReply = (text, index) => {
        const {replies} = this.props

        replies[index]['content'] = text

        this.props.handleReplies(replies)
    }

    handleAnswer = id => {
        if (this.props.type === MULTI_ANSWER_TYPE) {
            const answer = _.xor(this.props.answer, [id])

            this.props.handleAnswer(answer)
        } else {
            this.props.handleAnswer(id)
        }
    }

    render() {
        const {replies, answer, type} = this.props

        return (
            <div className={'col-lg-12'}>
               {/*<div className={'text-right'}>*/}
               {/*    {replies.map((item, index) => {*/}
               {/*        return <div key={item.id} className="btn-group btn-group-sm" role="group" style={{'marginRight': '5px'}}>*/}
               {/*            <button className={'btn btn-secondary btn-sm'}>{item.id}</button>*/}
               {/*            <button onClick={() => this.onRemove(item.id)}*/}
               {/*                    className={'btn btn-light btn-sm'}><span className={'danger'}>x</span></button>*/}
               {/*        </div>*/}

               {/*    })}*/}
               {/*    <button  onClick={() => this.onAdd()}  className={'btn btn-primary btn-sm'}> + </button>*/}
               {/*</div>*/}
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Reply</th>
                        <th>Answer</th>
                        <th className={'text-right'}>
                            <button onClick={() => this.onAdd()} className={'btn btn-sm btn-primary'}>Add</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        replies.map((item, index) => {
                            return <RadioReplyComponent
                                key={index}
                                item={item}
                                index={index}
                                type={type}
                                answer={answer}
                                onRemove={this.onRemove}
                                handleReply={this.handleReply}
                                handleAnswer={this.handleAnswer}
                            />
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
