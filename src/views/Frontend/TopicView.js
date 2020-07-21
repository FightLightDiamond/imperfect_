import React from "react";


export default class TopicView extends React.Component {
    render() {
        return (
            <div>
                <h3>
                    {this.props.match.params.topicId}
                </h3>
            </div>
        );
    }
}
