import React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import {Form} from "react-bootstrap";
import UploadFileComponent from '../Lesson/UploadFileComponent'

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

export default class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            intro: '',
            content: '',
            tab: "write",
        };
    }

    componentDidMount() {
        const {lesson} = this.props

        this.setState({
            title: lesson.title,
            intro: lesson.intro,
            content: lesson.content,
        })
    }

    onUpdate() {
        const {updateLessonAction} = this.props
        const {id} = this.props.lesson
        const {title, intro, content} = this.state

        alert('onUpdate');

        updateLessonAction(id, {title, intro, content})
    }

    render() {
        const {deleteFileLessonAction} = this.props

        return (
            <div>
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

                <UploadFileComponent deleteFileLessonAction={deleteFileLessonAction}/>

                <div className={'form-group'}>
                    <button className={'btn btn-primary'} onClick={() => this.onUpdate()}>Save</button>
                </div>
            </div>
        );
    }
}
