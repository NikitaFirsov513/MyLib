import { createSlice } from "@reduxjs/toolkit";
import { TBookList } from "../../data/BookList";
import { setBookList } from "../actions/bookListActions";




export type TBookListReducer = {
    bookList: TBookList,
    bookListAfterParams: TBookList,
    ganreList: string[],

    activeGanreList: string[],

}

const initialState: TBookListReducer = {
    bookList: [],
    bookListAfterParams: [],
    ganreList: [],
    activeGanreList: [],
}

const reduserName = "bookList";

export const bookListSlice = createSlice({

    name: reduserName,
    initialState,
    reducers: {

        toggleParam: (state, action) => {

            //alert("toggleParam");
            const bookList: TBookList = JSON.parse(JSON.stringify(state, undefined, 2)).bookList;
            const param = action.payload;
            let ganreList: string[] = JSON.parse(JSON.stringify(state, undefined, 2)).ganreList;
            let activeGanreList: string[] = JSON.parse(JSON.stringify(state, undefined, 2)).activeGanreList;
            let newBookListAfterParams: TBookList = [];

            const index = activeGanreList.indexOf(param);


            if (index !== -1) {
                activeGanreList.splice(index, 1);
            }
            else {
                activeGanreList.push(param);
            }

            const colParams = activeGanreList.length;

            bookList.forEach(element => {
                let col = 0;


                activeGanreList.forEach(elem => {

                    const isFindValue = element.genre.indexOf(elem);


                    if (isFindValue !== -1) {

                        col++;
                    }


                })

                if (col == colParams) {

                    newBookListAfterParams.push(element)

                }

            })










            state.activeGanreList = activeGanreList;
            state.bookListAfterParams = newBookListAfterParams;
            //console.log(isFindValue);
            //const isFindValue = ganreList.find((el) => elem === el);

        }

    },
    extraReducers: (builder) => {

        builder.addCase(setBookList.fulfilled, (state, actions) => {
            state.bookList = actions.payload;
            state.bookListAfterParams = actions.payload;
            const bookList = actions.payload;
            let ganreList: string[] = [];
            bookList.forEach(element => {


                element.genre.split("/").forEach((elem) => {



                    const isFindValue = ganreList.find((el) => elem === el);
                    if (!isFindValue && elem !== "")
                        ganreList.push(elem);

                    /* 
                     console.group();
                     console.log(elem);
                     console.log(ganreList);
                     console.log(isFindValue);
                     console.groupEnd();*/
                })


            })


            state.ganreList = ganreList;







            //const isFindValue = allParams.mainParams[indexParam].value.find((e, i) => e === elem.value);

        })
    }

})



export const { toggleParam } = bookListSlice.actions;