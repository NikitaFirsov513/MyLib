
import { createSlice } from "@reduxjs/toolkit";
import { TBookList, TBookListElement } from "../../data/BookList";

type TBasketBook = {
    title: string,
    name: string,
    image: string,
    genre: string,


}

export type TBasketListReducer = {

    bookList: TBookList,


}

const initialState: TBasketListReducer = {

    bookList: [],

}

const reduserName = "basketList";


export const basketListSlice = createSlice({


    name: "basketList",
    initialState,
    reducers: {

        addToCard: (state, action) => {

            let list = action.payload;
            state.bookList.push(list);

        },
        delateFromCard: (state, action) => {

            /*let list = action.payload;
            state.bookList.push(list);
*/
            let newCardList = JSON.parse(JSON.stringify(state, undefined, 2)).bookList;
            const element: TBookListElement = action.payload;
            let indexElement = null;

            newCardList.forEach((e: TBookListElement, index: number) => {

                if (e.name == element.name) {
                    indexElement = index;
                }

            })

            newCardList.splice(indexElement, 1)
            state.bookList = newCardList;

        },
        clearCard: (state, action) => {


            state.bookList = [];

        },

    }
})


export const {
    addToCard,
    delateFromCard,
    clearCard,
} = basketListSlice.actions;



