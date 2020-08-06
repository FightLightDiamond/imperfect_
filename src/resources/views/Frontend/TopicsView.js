import React from "react";
import {Route, Link} from 'react-router-dom'
import TopicView from "./TopicView";

export default class TopicViews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topics: [
                {
                    title: 'Rendering with React',
                    link: 'rendering',
                    reply: null,
                },
                {
                    title: 'Components',
                    link: 'components',
                    reply: null,
                },
                {
                    title: 'Props v. State',
                    link: 'props-v-state',
                    reply: null,
                },
            ],
            text: 12,
        }
    }

    render() {
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>
                            Rendering with React <button className={'btn btn-sm btn-danger'}>x</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>
                            Components <button className={'btn btn-sm btn-danger'}>x</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>
                            Props v. State <button className={'btn btn-sm btn-danger'}>x</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>
                            Add
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
