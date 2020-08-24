import React from "react";
import TrueFalseComponent from "./TrueFalseComponent";
import MultipleChoiceComponent from "./MultipleChoiceComponent";
import MultiAnswersComponent from "./MultiAnswersComponent";
import {MULTI_CHOICE_TYPE, TRUE_FALSE_TYPE} from "../../../../config/Question";

export default class ReplyComponent extends React.Component {
    render() {
        const {type, replies, handleAnswer} = this.props

        return (
            <div className={'col-lg-12'}>
                <label>Reply</label>
                {type === TRUE_FALSE_TYPE ?
                <TrueFalseComponent handleAnswer={handleAnswer} replies={replies}/>  :
                type === MULTI_CHOICE_TYPE ?
                <MultipleChoiceComponent handleAnswer={handleAnswer} replies={replies}/> :
                <MultiAnswersComponent handleAnswer={handleAnswer} replies={replies}/>}
            </div>

        )
    }
}
