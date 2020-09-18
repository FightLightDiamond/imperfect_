import React from "react";
import RadioReplyComponent from "./Reply/RadioReplyComponent";

const MultipleChoiceComponent = props => {
    const {replies, handleAnswer} = props

    return (
        <table className={'table'}>
            <tbody>
            {
                replies.map((item, index) => {
                    return <RadioReplyComponent
                        key={index}
                        handleAnswer={handleAnswer}
                        item={item}
                        index={index}
                    />
                })
            }
            </tbody>
        </table>
    )
}

export default MultipleChoiceComponent
