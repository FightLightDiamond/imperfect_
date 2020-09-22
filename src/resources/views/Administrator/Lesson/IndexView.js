import React from "react";
import LessonsContainer from "../../../containers/Administrator/Lesson/LessonsContainer";

const IndexView = props => {

console.log(props.history)
    return (
        <LessonsContainer {...props} />
    );
}

export default IndexView