import React from "react";
import TrueFalseComponent from "./TrueFalseComponent";
import MultipleChoiceComponent from "./MultipleChoiceComponent";
import MultiAnswersComponent from "./MultiAnswersComponent";

export default class ReplyComponent extends React.Component {
    render() {
        const {type, replies, handleAnswer} = this.props

        return (
            <div className={'col-lg-12'}>
                <label>Reply</label>
                {type == 1 ?
                <TrueFalseComponent handleAnswer={handleAnswer} replies={replies}/>  :
                type == 2 ?
                <MultipleChoiceComponent handleAnswer={handleAnswer} replies={replies}/> :
                <MultiAnswersComponent handleAnswer={handleAnswer} replies={replies}/>}
            </div>

        )
    }
}
