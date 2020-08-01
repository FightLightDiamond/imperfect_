import React from "react";
import UpdateContainer from "../../../containers/Administrator/Lesson/UpdateContainer";
export default class UpdateView extends React.Component {
    render() {
        return (
            <div>
                <h2>Lesson UpdateView</h2>
                <UpdateContainer id={ this.props.match.params.id}/>
            </div>
        );
    }
}
