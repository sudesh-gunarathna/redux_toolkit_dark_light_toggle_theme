import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/themeSlice";

const store = configureStore({
    reducer:{
        themea:themeReducer
    }

})
export default store;