import React, {useState} from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import Dropzone from 'react-dropzone'

const UploadFileComponent = props => {
    const [files, setFiles] = useState('')
    const [filesUploaded, setFilesUploaded] = useState([])

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

    const {deleteFileLessonAction} = props

    return (
        <div>
            <Dropzone
                accept={'image/jpeg, image/png'}
                multiple={true}
                maxSize={10000000}
                onDrop={acceptedFiles => {
                    acceptedFiles.map(file => setFilesUploaded([...filesUploaded, file])
                    )

                    const f = filesUploaded.map((file, key) => (
                        <div style={thumb} key={key}>
                            <div style={thumbInner}>
                                <button onClick={() => deleteFileLessonAction(key)}>x</button>
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
        </div>
    )
}

export default UploadFileComponent
