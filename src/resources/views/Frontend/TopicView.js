import React, {useState} from "react";


const TopicView = props => {
    const [text, setText] = useState(12)

    return (
        <div>
            <h3>
                {props.match.params.topicId}
                <input
                    onChange={e =>setText(e.target.value)}
                    value={text}
                />
            </h3>
        </div>
    )
}

export default TopicView
