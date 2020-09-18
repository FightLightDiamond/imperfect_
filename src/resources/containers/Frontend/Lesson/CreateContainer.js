import React, {useEffect, useState} from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from 'react-markdown/with-html'
import Dropzone from 'react-dropzone'
import CodeBlock from "../../../components/CodeBlock";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {
    getFileLessonAction,
    updateFileLessonAction,
    deleteFileLessonAction
} from "../../../../stores/redux/file-lesson/actions";
import {createLessonAction, updateLessonAction} from "../../../../stores/redux/lesson/actions";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const CreateContainer = props => {
    const [title, setTitle] = useState('')
    const [intro, setIntro] = useState('')
    const [content, setContent] = useState('')
    const [tab, setTab] = useState('write')
    const [filesUploaded, setFilesUploaded] = useState([])
    const [files, setFiles] = useState('')

    const {updateLessonAction, createLessonAction, lesson} = props

    useEffect(() => {
        createLessonAction({lesson: {section_id: 1, title: 'a', intro: 'b'}})
    }, [])

    const onUpdate = () => {
        const {id} = lesson
        updateLessonAction(id, {title, intro, content})
    }

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
            <h1>{title}</h1>
            <ReactMarkdown
                source={intro}
                language={'php'}
                renderers={{code: CodeBlock}}
                escapeHtml={false}
            />
            <ReactMarkdown
                source={content}
                language={'php'}
                renderers={{code: CodeBlock}}
                escapeHtml={false}
            />
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={text => setTitle(text.target.value)}
                        placeholder="Enter title"/>
                </Form.Group>
                <Form.Group controlId="formContent">
                    <Form.Label>Introduce</Form.Label>
                    <ReactMde
                        value={intro}
                        onChange={text => setIntro(text)}
                        selectedTab={tab}
                        onTabChange={text => setTab(text)}
                        generateMarkdownPreview={markdown =>
                            Promise.resolve(converter.makeHtml(markdown))
                        }
                    />
                </Form.Group>
                <Form.Group controlId="formContent">
                    <Form.Label>Content</Form.Label>
                    <ReactMde
                        value={content}
                        onChange={text => setContent(text)}
                        selectedTab={tab}
                        onTabChange={text => setTab(text)}
                        generateMarkdownPreview={markdown =>
                            Promise.resolve(converter.makeHtml(markdown))
                        }
                    />
                </Form.Group>
            </Form>

            <Dropzone
                accept={'image/jpeg, image/png'}
                multiple={true}
                maxSize={10000000}
                onDrop={acceptedFiles => {
                    acceptedFiles.map(file => {
                        setFilesUploaded([...filesUploaded, file])
                    })

                    const f = filesUploaded.map((file, key) => (
                        <div style={thumb} key={key}>
                            <div style={thumbInner}>
                                <button onClick={() => deleteFileLessonAction(key)}>x</button>
                                <img
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

            <div className={'form-group'}>
                <button className={'btn btn-primary'} onClick={() => onUpdate()}>Save</button>
            </div>
        </div>
    );
}

const mapStateToProps = ({fileLesson, Lesson}) => {
    // const {image} = fileLesson;
    const {lesson, loading, error} = Lesson;

    return {fileLesson, lesson, loading, error};
};

export default connect(
    mapStateToProps,
    {
        createLessonAction, updateLessonAction,
        getFileLessonAction, updateFileLessonAction, deleteFileLessonAction
    }
)(CreateContainer);
