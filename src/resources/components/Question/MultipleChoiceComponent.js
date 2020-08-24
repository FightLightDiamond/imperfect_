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
            <div className={'col-lg-12 table-responsive'}>
                <table className={'table table-borderless table-hover'}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Reply</th>
                        <th>Answer</th>
                        <th style={{width: '10px'}} className={'text-right'}>
                            <button onClick={() => this.onAdd()} className={'btn btn-sm btn-primary'}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-earmark-plus"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5v2.5A1.5 1.5 0 0 0 10.5 6H13v2h1V6L9 1z"/>
                                    <path fillRule="evenodd"
                                          d="M13.5 10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                                    <path fillRule="evenodd"
                                          d="M13 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
                                </svg>
                            </button>
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
