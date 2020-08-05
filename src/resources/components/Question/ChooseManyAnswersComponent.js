import React from "react";
import CheckboxReplyComponent from "./Reply/CheckboxReplyComponent";

export default class ChooseManyAnswersComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multi_answer: [
                {answer: false, reply: ''},
            ]
        }
    }

    render() {
        const {multi_answer,
            onAddQuestionMultiAnswer, onRemoveQuestionMultiAnswer,
            handleReplyMultiAnswer, handleAnswerMultiAnswer} = this.props

        return (
            <div className={'col-lg-12'}>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Answer</th>
                        <th>Reply</th>
                        <th className={'text-right'}>
                            <button onClick={() => onAddQuestionMultiAnswer()} className={'btn btn-sm btn-primary'}>Add</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {multi_answer.map((item, index) => {
                        return <CheckboxReplyComponent
                            key={index}
                            item={item} index={index}
                            onRemoveQuestionMultiAnswer={onRemoveQuestionMultiAnswer}
                            handleReplyMultiAnswer={handleReplyMultiAnswer}
                            handleAnswerMultiAnswer={handleAnswerMultiAnswer}
                        />
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
