import React from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import CreateContainer from "../../containers/Frontend/Lesson/CreateContainer";


export default class LessonView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: "**Hello world!!!**",
            tab: "write" | "preview",
        };
    }

    render() {
        return (
            <div>
               <CreateContainer />
            </div>
        );
    }
}
