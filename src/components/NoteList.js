import React, { useState, useEffect } from 'react';
import { Col, ControlLabel, Row, Button, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function NoteList(props) {

    const [noteList, setNoteList] = useState(props.notes)

    useEffect(() => setNoteList(props.notes))

    function renderNoteList() {
        if(noteList)return noteList.map(note => {
           return <ListGroupItem key={note.id} onClick={()=>props.selectedNote(note.id)} style={styles.listItem}>{note.title}</ListGroupItem>
        })
    }

    console.log('NOTELIST AT NOTELIST', noteList, props)
    return (
        <React.Fragment>
            <Row style={styles.titleRow}>
                <ControlLabel style={styles.logo}>TODO!!!</ControlLabel>
                <Button style={styles.addButton} onClick={()=> props.onClickAdd()}><i class="fas fa-plus"></i></Button>
            </Row>
            <Row >
                <Button style={styles.serachIcon}><i class="fas fa-search"></i></Button>
                <FormControl style={styles.searchBox} />
            </Row>
            <Row>
                <ListGroup>{ renderNoteList() }</ListGroup>    
            </Row>
        </React.Fragment>
    );
}

const styles = {
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
        width: '85%'
    },
    serachIcon: {
        border: '0px'
    },
    listItem: {
        
    }


}