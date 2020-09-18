import React from "react";
import UpdateContainer from "../../../containers/Administrator/Lesson/UpdateContainer";

const UpdateView = props => {
    return (
        <div>
            <h2>Lesson UpdateView</h2>
            <UpdateContainer history={props.history} id={props.match.params.id}/>
        </div>
    );
}

export default UpdateView