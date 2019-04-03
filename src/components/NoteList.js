import React, { useState, useEffect } from 'react';
import { Col, ControlLabel, Row, Button, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function NoteList(props) {

    const [noteList, setNoteList] = useState(props.notes)
    const [searchTimeout, setSearchTimeout] = useState()

    useEffect(() => setNoteList(props.notes), [props.notes])

    function handleSearch(e) {
        clearTimeout(searchTimeout);
        setSearchTimeout(setTimeout(() => {
            const filteredList = props.notes.filter(note => { 
                if(note.title.toLowerCase().includes(e.toLowerCase()) || note.content.toLowerCase().includes(e.toLowerCase())) return note 
            })
            if(noteList.length === filteredList.length) return
            setNoteList(filteredList)
        }, 100))
    }
    
    function renderNoteList() {
        if(noteList)return noteList.map(note => {
            return <ListGroupItem key={note._id} onClick={()=>props.selectedNote(note._id)} style={styles.listItem}>{note.title}</ListGroupItem>
        })
    }

    return (
        <div style={styles.container}>
            <Row style={styles.titleRow}>
                <ControlLabel style={styles.logo}>TODO!!!</ControlLabel>
                <Button style={styles.addButton} onClick={()=> props.onClickAdd()}><i class="fas fa-plus"></i></Button>
            </Row>
            <Row >
                <i style={styles.serachIcon} class="fas fa-search"></i>
                <FormControl style={styles.searchBox} placeholder={'Search by...'} onChange={e=> handleSearch(e.target.value)}/>
            </Row>
            <Row>
                <ListGroup>{ renderNoteList() }</ListGroup>    
            </Row>
        </div>
    );
}

const styles = {
    container: {
        padding: '10px 40px'
    },
    titleRow: {
        padding: '20px'
    },
    logo: {
        fontSize: '30pt'
    },
    addButton: {
        float: 'right',
        borderRadius: '35px',
        fontSize: '14pt',
        marginTop: '8px'
    },
    searchBox: {
        display: 'inline',
        width: '85%',
        marginBottom: '20px',
        border: '0px'
    },
    serachIcon: {
        border: '0px',
        margin: '10px'
    }
}