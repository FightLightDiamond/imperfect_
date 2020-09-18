import React from "react";
import RadioReplyComponent from "./Reply/RadioReplyComponent";
import uid from 'uid';
import _ from 'lodash'
import {MULTI_ANSWER_TYPE} from "../../../config/Question";

const MultipleChoiceComponent = props => {
    const onAdd = () => {
        const {replies} = props
        const id = uid()

        props.handleReplies([...replies, {id, content: ''}])
    }

    const onRemove = (id) => {
        let {replies} = props

        // eslint-disable-next-line array-callback-return
        const removed = replies.filter(item => {
            if (item.id !== id) return item
        });

        props.handleReplies(removed, id)
    }

    const handleReply = (text, index) => {
        const {replies} = props

        replies[index]['content'] = text

        props.handleReplies(replies)
    }

    const handleAnswer = id => {
        if (props.type === MULTI_ANSWER_TYPE) {
            const answer = _.xor(props.answer, [id])

            props.handleAnswer(answer)
        } else {
            props.handleAnswer(id)
        }
    }

    const {replies, answer, type} = props

    return (
        <div className={'col-lg-12 table-responsive'}>
            <table className={'table table-borderless table-hover'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Reply</th>
                    <th>Answer</th>
                    <th style={{width: '10px'}} className={'text-right'}>
                        <button onClick={() => onAdd()} className={'btn btn-sm btn-primary'}>
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
                            onRemove={onRemove}
                            handleReply={handleReply}
                            handleAnswer={handleAnswer}
                        />
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default MultipleChoiceComponent
