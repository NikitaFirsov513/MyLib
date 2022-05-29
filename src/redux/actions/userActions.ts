import { createAsyncThunk } from "@reduxjs/toolkit";
import { TBookList } from "../../data/BookList";
import { THistory } from "../reducers/userReducer";

const userActions = {

    SET_HISTORY: "user/setHistory",
}



export const setHistory = createAsyncThunk(

    userActions.SET_HISTORY,
    async function (userEmail: string) {
        let req
        req = await fetch(`http://localhost/MyLib/hs/v1/history`, {
            method: 'POST', body:
                JSON.stringify({
                    email: userEmail
                })
        });



        let data: THistory[] = await req.json();
        return data;
    }


)

