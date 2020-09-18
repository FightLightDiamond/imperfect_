import React from "react";
import TrueFalseComponent from "./TrueFalseComponent";
import MultipleChoiceComponent from "./MultipleChoiceComponent";
import MultiAnswersComponent from "./MultiAnswersComponent";
import {MULTI_ANSWER_TYPE, MULTI_CHOICE_TYPE, TRUE_FALSE_TYPE} from "../../../../config/Question";

const ReplyComponent = props => {
    const {type, replies, handleAnswer} = props

    const replyRender = (type, replies, handleAnswer) => {
        switch (type) {
            case TRUE_FALSE_TYPE :
                return <TrueFalseComponent handleAnswer={handleAnswer} replies={replies}/>
            case MULTI_CHOICE_TYPE :
                return <MultipleChoiceComponent handleAnswer={handleAnswer} replies={replies}/>
            case MULTI_ANSWER_TYPE :
                return <MultiAnswersComponent handleAnswer={handleAnswer} replies={replies}/>
            default :
                return 'Thế loại không hợp lệ'
        }
    }

    return (
        <div className={'col-lg-12'}>
            <label>Reply</label>
            {
                replyRender(type, replies, handleAnswer)
            }
        </div>

    )
}

export default ReplyComponent
