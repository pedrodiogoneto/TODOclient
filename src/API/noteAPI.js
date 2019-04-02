import axios from "axios";
import URLS from "../helpers/URLS";

function noteAPI() {
    
        async function getAllNotes() {
            const res = await axios.get('http://localhost:3000' + URLS.GET_ALL_NOTES)
            return res.data
        }

        async function saveNewNote(saveTitle, saveContent, saveId) {
            const res = await axios.post('http://localhost:3000/', { saveTitle, saveContent, saveId })
            return res.data
        }

        async function editNote(editTitle, editContent, editId) {
            const res = await axios.post(`http://localhost:3000/${editId}`, { editTitle, editContent, editId })
            return res.data
        }

    
    return {
        getAllNotes,
        saveNewNote,
        editNote,
    };
}

export default noteAPI();
