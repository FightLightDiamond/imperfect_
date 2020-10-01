import React from "react";
import LessonsContainer from "../../containers/Frontend/Lesson/LessonsContainer";
import Layout from "../../components/layout/Frontend/Layout";

const LessonsView = props => {
    const {history} = props

    return (
        <Layout>
            <LessonsContainer {history}/>
        </Layout>
    );
}

export default LessonsView
