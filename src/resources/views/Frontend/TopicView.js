import React from "react";


export default class TopicView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 12,
        }
    }

    render() {
        return (
            <div>
                <h3>
                    {this.props.match.params.topicId}
                    <input
                        onChange={(e) => this.setState({text: e.target.value})}
                        value={this.state.text}
                    />
                </h3>
            </div>
        );
    }
}
