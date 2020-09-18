import React from "react";
import ShowContainer from "../../../containers/Administrator/Question/ShowContainer";


const CreateView = (props) => {
    return <ShowContainer history={props.history} id={props.match.params.id}/>
}

export default CreateView
