import axios from "axios";
import URLS from "../helpers/URLS";

function noteAPI() {
    
   /*  async function getAllNotes() {
        try {
            let res = await axios.get('http://localhost:3000' + URLS.GET_ALL_NOTES)
                    .then(response => { if (response.status === 200) return response }
            );
            return res
        } 
        catch ( error ) {
                console.log(error)
            }
        } */

        function getAllNotes() {
            return [
                {
                    id: '1',
                    title: "Test1",
                    content: "asdfasdfasjdhfklasjhdflkjahsdlkjfhaksjhdflkjashdfkjhasdlkfjhaksljdhfakljshdfklajhsdkfhaslkdfhj"
                },
                {
                    id: '2',
                    title: "Test2",
                    content: "asdfasdfasjdhfklasjhdflkjahsdlkjfhaksjhdflkjashdfkjhasdlkfjhaksljdhfakljshdfklajhsdkfhaslkdfhj"
                },
                {
                    id: '3',
                    title: "Test3",
                    content: "asdfasdfasjdhfklasjhdflkjahsdlkjfhaksjhdflkjashdfkjhasdlkfjhaksljdhfakljshdfklajhsdkfhaslkdfhj"
                },
                {
                    id: '4',
                    title: "Test4",
                    content: "asdfasdfasjdhfklasjhdflkjahsdlkjfhaksjhdflkjashdfkjhasdlkfjhaksljdhfakljshdfklajhsdkfhaslkdfhj"
                },
                {
                    id: '5',
                    title: "Test5",
                    content: "asdfasdfasjdhfklasjhdflkjahsdlkjfhaksjhdflkjashdfkjhasdlkfjhaksljdhfakljshdfklajhsdkfhaslkdfhj"
                },
                {
                    id: '6',
                    title: "Test6",
                    content: "asdfasdfasjdhfklasjhdflkjahsdlkjfhaksjhdflkjashdfkjhasdlkfjhaksljdhfakljshdfklajhsdkfhaslkdfhj"
                },
            ]
        }

    
    return {
        getAllNotes,
    };
}

export default noteAPI();
