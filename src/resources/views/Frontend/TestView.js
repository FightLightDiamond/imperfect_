import React, {useState} from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from 'react-markdown/with-html'
import Dropzone from 'react-dropzone'
import CodeBlock from "../../components/CodeBlock";
import Layout from "../../components/layout/Frontend/Layout";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const TestView = props => {
    const [content, setContent] = useState('')
    const [filesUploaded, setFilesUploaded] = useState([])
    const [files, setFiles] = useState('')
    const [tab, setTab] = useState("write" | "preview")

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
        <Layout>
            <ReactMarkdown
                source={content}
                language={'php'}
                renderers={{code: CodeBlock}}
                escapeHtml={false}
            />

            <ReactMde
                value={content}
                onChange={text => setContent(text)}
                selectedTab={tab}
                onTabChange={text => setTab(text)}
                generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
            />

            <Dropzone
                accept={'image/jpeg, image/png'}
                multiple={true}
                maxSize={10000000}
                onDrop={acceptedFiles => {
                    acceptedFiles.map(file =>
                        setFilesUploaded([...filesUploaded, file])
                    )
                    const f = filesUploaded.map((file, key) => (
                        <div style={thumb} key={key}>
                            <div style={thumbInner}>
                                <button>x</button>
                                <img alt={key}
                                     src={URL.createObjectURL(file)}
                                     style={img}
                                />
                            </div>
                        </div>
                    ))

                    setFiles(f)
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
                <ul>{files}</ul>
            </aside>
        </Layout>
    );
}

export default TestView