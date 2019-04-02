import axios from "axios";

function noteAPI() {
    
        async function getAllNotes() {
            const res = await axios.get('http://localhost:3000/')
            return res.data
        }

        async function saveNewNote(title, content, id) {
            console.log(title, content, id)
            const res = await axios.post('http://localhost:3000/', { title, content, id })
            return res.data
        }

        async function editNote(title, content, id) {
            const res = await axios.post(`http://localhost:3000/${id}`, { title, content, id })
            return res.data
        }


        async function deleteNote(id) {
            const res = await axios.delete(`http://localhost:3000/${id}`)
            return res.data
        }

    
    return {
        getAllNotes,
        saveNewNote,
        editNote,
        deleteNote,
    };
}

export default noteAPI();
