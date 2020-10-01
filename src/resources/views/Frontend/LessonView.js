import React from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import ShowContainer from "../../containers/Frontend/Lesson/ShowContainer";
import Layout from "../../components/layout/Frontend/Layout";


const LessonView = props => {
    const {history} = props

    return (
        <Layout>
            <ShowContainer history={history} id={props.match.params.id}/>
        </Layout>
    );
}

export default LessonView
