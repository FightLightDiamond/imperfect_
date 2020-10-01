import React, {useState} from "react";
import Layout from "../../components/layout/Frontend/Layout";


const TopicView = props => {
    const [text, setText] = useState(12)

    return (
        <Layout>
            <h3>
                {props.match.params.topicId}
                <input
                    onChange={e =>setText(e.target.value)}
                    value={text}
                />
            </h3>
        </Layout>
    )
}

export default TopicView
