import { createSlice } from "@reduxjs/toolkit";
import { setHistory } from "../actions/userActions";



type TUserData = {
    username: string,
    surname: string,
    name: string,
    secondname: string,
    email: string,
}

export type THistory = {
    date: string,
    title: string,
    name: string
}

export interface IUserReducer {
    isLoginOpen: boolean,
    isRegistrationOpen: boolean,
    isAuth: boolean,
    isLoad: boolean,
    userData: TUserData | null,
    history: THistory[],


}
const initialState: IUserReducer = {

    isLoginOpen: false,
    isRegistrationOpen: false,
    isAuth: false,
    isLoad: false,
    userData: null,
    history: [],
}

const reduserName = "user";

export const userSlice = createSlice({


    name: reduserName,
    initialState,
    reducers: {
        setDialog: (state, action) => {
            const isLoginOpen = action.payload.isLoginOpen;
            const isRegistrationOpen = action.payload.isRegistrationOpen;
            const isLoad = action.payload.isLoad;

            state.isLoginOpen = isLoginOpen;
            state.isRegistrationOpen = isRegistrationOpen;
            state.isLoad = isLoad;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
            state.isAuth = true;
        },
        logout: (state, action) => {

            state.isLoginOpen = false;
            state.isRegistrationOpen = false;
            state.isAuth = false;
            state.isLoad = false;
            state.userData = null;
        }


    },
    extraReducers: (builder) => {
        builder.addCase(setHistory.fulfilled, (state, action) => {
            
            
            const history = action.payload;
            if (history === undefined)
                return;

            state.history = history;

        })

    },

})


export const {
    setDialog,
    setUserData,
    logout,
} = userSlice.actions;


