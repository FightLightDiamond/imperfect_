import React from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import ShowContainer from "../../containers/Frontend/Lesson/ShowContainer";


const LessonView = props => {
    const {history} = props

    return (
        <div>
            <ShowContainer history={history} id={props.match.params.id}/>
        </div>
    );
}

export default LessonView
