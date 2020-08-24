import React from "react";
import LessonsContainer from "../../../containers/Administrator/Lesson/LessonsContainer";

export default class IndexView extends React.Component {
    render() {
        return (
            <div>
                <h2>Lessons</h2>
                <LessonsContainer/>
            </div>
        );
    }
}
