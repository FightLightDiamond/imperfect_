import React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from 'react-markdown/with-html'
import Dropzone from 'react-dropzone'
import CodeBlock from "../../components/CodeBlock";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

export default class TestView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            intro: '',
            content: '',
            lesson: "**TestView!!!**",
            tab: "write",
            filesUploaded: [],
            files: ''
        };
    }

    render() {
        const thumb = {
            display: 'inline-flex',
            borderRadius: 2,
            border: '1px solid #eaeaea',
            marginBottom: 8,
            marginRight: 8,
            width: 100,
            height: 100,
            padding: 4,
            boxSizing: 'border-box'
        };

        const thumbInner = {
            display: 'flex',
            minWidth: 0,
            overflow: 'hidden'
        };

        const img = {
            display: 'block',
            width: 'auto',
            height: '100%'
        };

        return (
            <div>
                <ReactMarkdown
                    source={this.state.content}
                    language={'php'}
                    renderers={{code: CodeBlock}}
                    escapeHtml={false}
                />

                <ReactMde
                    value={this.state.content}
                    onChange={text => this.setState({content: text})}
                    selectedTab={this.state.tab}
                    onTabChange={text => this.setState({tab: text})}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />

                <Dropzone
                    accept={'image/jpeg, image/png'}
                    multiple={true}
                    maxSize={10000000}
                    onDrop={acceptedFiles => {
                        acceptedFiles.map(file => {
                            this.setState({
                                filesUploaded: [...this.state.filesUploaded, file]
                            })
                        })

                        this.setState({
                            files: this.state.filesUploaded.map((file, key) => (
                                <div style={thumb} key={key}>
                                    <div style={thumbInner}>
                                        <button>x</button>
                                        <img
                                            src={URL.createObjectURL(file)}
                                            style={img}
                                        />
                                    </div>
                                </div>
                            ))
                        })
                    }}>

                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        </section>
                    )}
                </Dropzone>

                <aside>
                    <h4>Files</h4>
                    <ul>{this.state.files}</ul>
                </aside>
            </div>
        );
    }
}
