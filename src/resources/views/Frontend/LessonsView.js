import React from "react";
import LessonsContainer from "../../containers/Frontend/Lesson/LessonsContainer";

const LessonsView = props => {
    const {history} = props

    return (
        <div>
            <LessonsContainer {history}/>
        </div>
    );
}

export default LessonsView
