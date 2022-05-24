import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookList } from "../../data/BookList";



const BookListActions = {
    SET_BOOK_LIST: "bookList/setBookList",
}


export const setBookList = createAsyncThunk(
    BookListActions.SET_BOOK_LIST,

    async function () {

        await setTimeout(() => { }, 3000)

        return Promise.resolve(bookList);
        /*let req = await fetch(`http://localhost:80/digital/hs/category/all`, { method: 'GET', });
        req = await req.json();
        return req;*/
        // await setTimeout(()=>{return true},5000)

    })

