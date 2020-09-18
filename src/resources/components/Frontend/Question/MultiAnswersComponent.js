import React, {useState} from "react";
import CheckboxReplyComponent from "./Reply/CheckboxReplyComponent";
import _ from "lodash";

const MultiAnswersComponent = props => {
    const [answer, setAnswer] = useState([])

    const handleAnswer = (id) => {
        const newAnswer = _.xor(answer, [id])
        setAnswer(newAnswer)
        props.handleAnswer(newAnswer)
    }

    const {replies} = props

    return (
        <div>
            <table className={'table'}>
                <tbody>
                {replies.map((item, index) => {
                    return <CheckboxReplyComponent
                        key={index}
                        item={item} index={index}
                        handleAnswer={handleAnswer}
                    />
                })}
                </tbody>
            </table>
        </div>

    )
}

export default MultiAnswersComponent
