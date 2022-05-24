import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { bookListSlice } from "../reducers/bookListReducer";


const reducers = {
    bookList: bookListSlice.reducer,


};

const rootReducer = combineReducers({
    ...reducers,
});

export type RootState = ReturnType<typeof rootReducer>

const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export default setupStore;




