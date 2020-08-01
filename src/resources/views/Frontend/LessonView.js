import React from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import ShowContainer from "../../containers/Frontend/Lesson/ShowContainer";


export default class LessonView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: "**Hello world!!!**",
            tab: "write" | "preview",
            id: props.match.params.id
        };
    }

    render() {
        return (
            <div>
                <ShowContainer id={this.state.id} />
            </div>
        );
    }
}
