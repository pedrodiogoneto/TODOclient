import React, { useState, useEffect } from 'react';
import { Col, FormControl, Button } from 'react-bootstrap'

export default function SingleNote(props) {

    const [title, setTitle] = useState(props.selectedNote?props.selectedNote.title:undefined)
    const [content, setContent] = useState(props.selectedNote?props.selectedNote.content:undefined)

    useEffect(()=> {
        if(props.mode !== 'Add') return
        setTitle('NEW NOTE')
        setContent('Add a description')
        console.log('!!!!!!!!!!!!!!!!!!!', title, content, props.mode)
    }, [props.mode])

    useEffect(() => setTitle(props.selectedNote?props.selectedNote.title:'NEW NOTE'), [props.selectedNote])
    useEffect(() => setContent(props.selectedNote?props.selectedNote.content:'Add a description'), [props.selectedNote])

    console.log('>>>>', props, title, content)
    return (
        <React.Fragment>
            <Button style={styles.cancelButton} onClick={()=>props.onCancel()}><i class="fas fa-times"></i></Button>
            <FormControl value={title} style={styles.title} onChange={e => setTitle(e.target.value)}/>
            <input class="form-control" type="textarea" value={content} style={styles.content} onChange={e => setContent(e.target.value)}/>
        </React.Fragment>
    );
}

const styles = {
    title: {
        border: '0px',
        fontSize: '25pt',
        margin: '20px 0px',
        '-webkit-box-shadow': '10px 10px 5px 0px rgba(255,255,255,1)'
    },
    content: {
        border: '0px',
        '-webkit-box-shadow': '10px 10px 5px 0px rgba(255,255,255,1)'
    },
    cancelButton: {
        float: 'right',
        border: '0px'
    }
}