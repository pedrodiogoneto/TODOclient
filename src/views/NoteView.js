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

 /*    function onSelectNote(id) {
        setSelectedNote(id)
        setMode(undefined)
    } */

 /*    function onCancelNote() {
        setSelectedNote(undefined),
        setMode(undefined)
    }
 */
    function onAction(type, id) {
        switch (type) {
            case 'selectNote':
                setSelectedNote(id)
                break;
            case 'cancelNote':
                setSelectedNote(undefined)
                break
            default:
                break;
        }
        setMode(undefined)
    }

    console.log('!!!!', noteList, selectedNote)
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
                    mode={mode}
                />
                : null
            }
            </Col>
        </React.Fragment>
    );
}