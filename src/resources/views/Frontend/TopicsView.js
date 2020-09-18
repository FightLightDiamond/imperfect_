import React from "react";
import {Route, Link} from 'react-router-dom'
import TopicView from "./TopicView";

const TopicViews = props => {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${props.match.url}/rendering`}>
                        Rendering with React <button className={'btn btn-sm btn-danger'}>x</button>
                    </Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/components`}>
                        Components <button className={'btn btn-sm btn-danger'}>x</button>
                    </Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/props-v-state`}>
                        Props v. State <button className={'btn btn-sm btn-danger'}>x</button>
                    </Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/props-v-state`}>
                        Add
                    </Link>
                </li>
            </ul>

            <div className="secondary-route-place">
                <Route
                    path={`${props.match.url}/:topicId`}
                    component={TopicView}/>
                <Route
                    exact
                    path={props.match.url}
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

export default TopicViews