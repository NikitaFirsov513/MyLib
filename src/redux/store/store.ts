import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { basketListSlice } from "../reducers/basketListReducer";
import { bookListSlice } from "../reducers/bookListReducer";
import { userSlice } from "../reducers/userReducer";


const reducers = {
    bookList: bookListSlice.reducer,
    basketList: basketListSlice.reducer,
    user: userSlice.reducer,
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




