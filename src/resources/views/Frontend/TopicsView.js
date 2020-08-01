import React from "react";
import {Route, Link} from 'react-router-dom'
import TopicView from "./TopicView";

export default class TopicViews extends React.Component {
    render() {
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <div className="secondary-route-place">
                    <Route
                        path={`${this.props.match.url}/:topicId`}
                        component={TopicView}/>
                    <Route
                        exact
                        path={this.props.match.url}
                        render={() =>
                            <h3>
                                Please select a topic.
                            </h3>
                        }
                    />
                </div>
            </div>
        );
    }
}
