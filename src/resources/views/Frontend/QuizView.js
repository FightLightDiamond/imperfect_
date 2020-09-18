import React, {useState} from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from 'react-markdown/with-html'

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const QuizView = props => {
    const [lesson, setLesson] = useState("**QuizView!!!**")
    const [tab, setTab] = useState( "write" | "preview")

    return (
        <div>
            <ReactMarkdown
                source={lesson}
                escapeHtml={false}
            />
            <ReactMde
                value={lesson}
                onChange={text => setLesson(text)}
                selectedTab={tab}
                onTabChange={text => setTab(text)}
                generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
            />
        </div>
    );
}

export default QuizView
