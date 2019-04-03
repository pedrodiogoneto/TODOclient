import React, { useState, useEffect } from 'react';
import { Col, FormControl, Button } from 'react-bootstrap'

export default function SingleNote(props) {

    const [title, setTitle] = useState(props.selectedNote?props.selectedNote.title:undefined)
    const [content, setContent] = useState(props.selectedNote?props.selectedNote.content:undefined)

    useEffect(()=> {
        if(props.mode !== 'Add') return
        setTitle('NEW NOTE')
        setContent('Add a description')
    }, [props.mode])

    useEffect(() => setTitle(props.selectedNote?props.selectedNote.title:'NEW NOTE'), [props.selectedNote])
    useEffect(() => setContent(props.selectedNote?props.selectedNote.content:'Add a description'), [props.selectedNote])

    const noteId = props.mode === "Add" ? null : props.selectedNote._id
    return (
        <div style={styles.container}>
            <Button style={styles.cancelButton} onClick={()=> props.onCancel()}><i class="fas fa-times"></i></Button>
            <FormControl value={title} style={styles.title} onChange={e => setTitle(e.target.value)}/>
            <textarea class="form-control" type="textarea" value={content} style={styles.content} onChange={e => setContent(e.target.value)}/>
            <Button style={styles.saveButton} onClick={()=>props.onSave(title, content, noteId)}><i class="fas fa-check"></i></Button>
            <Button style={styles.deleteButton} onClick={()=>props.onDelete(noteId)}><i class="fas fa-times"></i></Button>
        </div>
    );
}

const styles = {
    container: {
        padding: '40px',
        margin: '40px',
        border: '1px solid grey',
        borderRadius: '4px'
    },
    title: {
        border: '0px',
        fontSize: '25pt',
        margin: '20px 0px',
        'WebkitBoxShadow': '10px 10px 5px 0px rgba(255,255,255,1)'
    },
    content: {
        border: '0px',
        'WebkitBoxShadow': '10px 10px 5px 0px rgba(255,255,255,1)',
        maxWidth: '100%',
        resize: 'none',
    },
    deleteButton: {
        float: 'right',
        borderRadius: '45px',
        marginRight: '20px',
        color: 'red',
        fontSize: '25pt',
        paddingLeft: '18px',
        paddingRight: '17px',
    },
    saveButton: {
        float: 'right',
        borderRadius: '45px',
        color: 'green',
        fontSize: '25pt',
    },
    cancelButton: {
        border: '0px',
        float: 'right'
    }
}