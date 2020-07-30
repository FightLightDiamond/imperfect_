import React from "react";
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
} from "../../../stores/redux/file-lesson/actions";
import {createLessonAction, updateLessonAction} from "../../../stores/redux/lesson/actions";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

class CreateContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            intro: '',
            content: '',
            tab: "write",
            filesUploaded: [],
            files: ''
        };
    }

    componentDidMount() {
        const {createLessonAction} = this.props
        createLessonAction({lesson: {section_id: 1, title: 'a', intro: 'b'}})

        const {lesson} = this.props

        // this.setState({
        //
        // });

        console.log('render', lesson)
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

        // const {lesson} = this.props
        //
        // this.setState({
        //
        // });

        // console.log('render', lesson)

        return (
            <div>
                <h1>{this.state.title}</h1>
                <ReactMarkdown
                    source={this.state.intro}
                    language={'php'}
                    renderers={{code: CodeBlock}}
                    escapeHtml={false}
                />
                <ReactMarkdown
                    source={this.state.content}
                    language={'php'}
                    renderers={{code: CodeBlock}}
                    escapeHtml={false}
                />
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={this.state.title}
                            onChange={text => this.setState({title: text.target.value})}
                            placeholder="Enter title"/>
                    </Form.Group>
                    <Form.Group controlId="formContent">
                        <Form.Label>Introduce</Form.Label>
                        <ReactMde
                            value={this.state.intro}
                            onChange={text => this.setState({intro: text})}
                            selectedTab={this.state.tab}
                            onTabChange={text => this.setState({tab: text})}
                            generateMarkdownPreview={markdown =>
                                Promise.resolve(converter.makeHtml(markdown))
                            }
                        />
                    </Form.Group>
                    <Form.Group controlId="formContent">
                        <Form.Label>Content</Form.Label>
                        <ReactMde
                            value={this.state.content}
                            onChange={text => this.setState({content: text})}
                            selectedTab={this.state.tab}
                            onTabChange={text => this.setState({tab: text})}
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
                            this.setState({
                                filesUploaded: [...this.state.filesUploaded, file]
                            })
                        })

                        this.setState({
                            files: this.state.filesUploaded.map((file, key) => (
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

                <div className={'form-group'}>
                    <button className={'btn btn-primary'} onClick={() => this.onUpdate()}>Save</button>
                </div>
            </div>
        );
    }

    onUpdate() {
        const {updateLessonAction} = this.props
        const {id} = this.props.lesson
        const {title, intro, content} = this.state

        alert('onUpdate');

        updateLessonAction(id, {title, intro, content})
    }
}

const mapStateToProps = ({fileLesson, Lesson}) => {
    const {image} = fileLesson;
    const {lesson} = Lesson;

    return {fileLesson, lesson};
};

export default connect(
    mapStateToProps,
    {
        createLessonAction, updateLessonAction,
        getFileLessonAction, updateFileLessonAction, deleteFileLessonAction
    }
)(CreateContainer);
