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
                    content: "1111111111asdfasdfasdfasdfasdfasdfasdf"
                },
                {
                    id: '2',
                    title: "Test2",
                    content: "222222222222lhasdjhfaklhjsdfkjasdkfjlhasd"
                },
                {
                    id: '3',
                    title: "Test3",
                    content: "333333333333kjnaskdjfnkljansdf"
                },
                {
                    id: '4',
                    title: "Test4",
                    content: "44444444444444saasdfasdfasdfasdfasdfasdfasdfasdfas"
                },
                {
                    id: '5',
                    title: "Test5",
                    content: "5555555555555lhaslkdjfhlaksjdhfklj"
                },
                {
                    id: '6',
                    title: "Test6",
                    content: "66666666666666jkjkjhkjkjkjhkjkljhjlkjkjhkjhkjhkljhkljh"
                },
            ]
        }

    
    return {
        getAllNotes,
    };
}

export default noteAPI();
