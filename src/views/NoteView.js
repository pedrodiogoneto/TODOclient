import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap'
import axios from 'axios'

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

    async function onAction(type, ...args) {
        switch (type) {
            case 'selectNote':
                const [ selectAction , _id ] = arguments
                setSelectedNote(_id)
                setMode('editing')
                break;
            case 'cancelNote':
                setSelectedNote(undefined)
                setMode(undefined)
                break
            case 'saveNote':
                const [ saveAction , saveTitle, saveContent, saveId ] = arguments
                let newNoteList = await noteApi.saveNewNote(saveTitle, saveContent, saveId)
                setNoteList(newNoteList)
                onAction('cancelNote')
            case 'editNote':
                const [ editAction , editTitle, editContent, editId ] = arguments
                newNoteList = await noteApi.editNote(editTitle, editContent, editId)
                console.log(newNoteList)
                setNoteList(newNoteList)
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
                    selectedNote={noteList.find(note => note._id === selectedNote)}
                    onCancel={()=>onAction('cancelNote', undefined)}
                    onSave={(title, content, id)=> onAction( mode === 'Add' ? 'saveNote' : 'editNote', title, content, id)}
                    mode={mode}
                />
                : null
            }
            </Col>
        </React.Fragment>
    );
}