import React, {useEffect, useState} from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import {Form} from "react-bootstrap";
import UploadFileComponent from '../Lesson/UploadFileComponent'
import {toast} from "react-toastify";
import {converter} from "../../../helpers/Markdown";


toast.configure()


const Editor = (props) => {
    const [title, setTitle] = useState('')
    const [intro, setIntro] = useState('')
    const [content, setContent] = useState('')
    const [tab, setTab] = useState('write')

    const {updateLessonAction, deleteFileLessonAction, lesson, history} = props

    useEffect(() => {
        setTitle(lesson.title)
        setIntro(lesson.intro)
        setContent(lesson.content)
    }, [lesson]);

    const onUpdate = () => {
        updateLessonAction(lesson.id, {title, intro, content}, history)
    }

    return (
        <div>
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

            <UploadFileComponent deleteFileLessonAction={deleteFileLessonAction}/>

            <div className={'form-group'}>
                <button className={'btn btn-primary'} onClick={() => onUpdate()}>Save</button>
            </div>
        </div>
    );
}

export default Editor