import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookList, TBookList } from "../../data/BookList";



const BookListActions = {
    SET_BOOK_LIST: "bookList/setBookList",
}


export const setBookList = createAsyncThunk(
    BookListActions.SET_BOOK_LIST,

    async function () {
        
        let req
        while (1) {
            req = await fetch(`http://localhost/MyLib/hs/v1/allbook`, { method: 'GET', });

            if (req.ok) {
                break;
            }
        }
        if (req !== undefined) {

            const data: TBookList | undefined = await req.json();
            if (data !== undefined)
                return data;
        }

        
    })

