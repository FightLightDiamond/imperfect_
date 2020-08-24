import React from "react";
import RadioReplyComponent from "./Reply/RadioReplyComponent";

export default class MultipleChoiceComponent extends React.Component {
    render() {
        const {replies, handleAnswer} = this.props

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
}
