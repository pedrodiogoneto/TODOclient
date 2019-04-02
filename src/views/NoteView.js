import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap'

import NoteList from '../components/NoteList'
import SingleNote from '../components/SingleNote'

import noteApi from '../API/noteAPI'

export default function NotesView() {
    const [noteList, setNoteList] = useState([])
    const [selectedNote, setSelectedNote] = useState(undefined)
    const [mode, setMode] = useState(undefined)

    useEffect(() => {
        async function getAllNotes() {
            const res = await noteApi.getAllNotes()
            setNoteList(res)
        }
        return getAllNotes()
    }, []); 

    function onAction(type, ...args) {
        switch (type) {
            case 'selectNote':
                const [ selectAction , id ] = arguments
                setSelectedNote(id)
                setMode('editing')
                break;
            case 'cancelNote':
                setSelectedNote(undefined)
                setMode(undefined)
                break
            case 'saveNote':
                const [ saveAction , title, content ] = arguments
                /* API REQUEST TO SAVE 
                let res = */
                onAction('cancelNote')
            default:
                break;
        }
    }

    return (
        <React.Fragment>
            <Col md="4">
                <NoteList 
                    notes={noteList}
                    selectedNote={id=> onAction('selectNote', id)}
                    onClickAdd={()=> setMode('Add')}
                />
            </Col>
            <Col md="8">
            {(selectedNote || mode === 'Add')?
                <SingleNote 
                    selectedNote={noteList.find(note => note.id === selectedNote)}
                    onCancel={()=>onAction('cancelNote', undefined)}
                    onSave={(title, content)=> onAction('saveNote', title, content)}
                    mode={mode}
                />
                : null
            }
            </Col>
        </React.Fragment>
    );
}