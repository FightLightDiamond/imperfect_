import React from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import ShowContainer from "../../containers/Frontend/Lesson/ShowContainer";


export default class LessonView extends React.Component {

    render() {
        return (
            <div>
                <ShowContainer id={this.props.match.params.id} />
            </div>
        );
    }
}
