import React from "react";
import ShowContainer from "../../../containers/Administrator/Question/ShowContainer";


export default class CreateView extends React.Component {
    render() {
        return <ShowContainer id={this.props.match.params.id} />
    }
}
