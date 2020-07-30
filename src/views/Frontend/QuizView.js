import React from "react";
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

export default class QuizView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: "**QuizView!!!**",
            tab: "write" | "preview",
        };
    }

    render() {
        return (
            <div>
                <ReactMarkdown
                    source={this.state.lesson}
                    escapeHtml={false}
                />
                <ReactMde
                    value={this.state.lesson}
                    onChange={text => this.setState({lesson: text})}
                    selectedTab={this.state.tab}
                    onTabChange={text => this.setState({tab: text})}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />
            </div>
        );
    }
}
