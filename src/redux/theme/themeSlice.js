import {createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice ({
    name : "theme",
    initialState: {isDarkMode: false,},
    reducers: {
        toggleTheme: (state)=>{
            state.isDarkMode = !state.isDarkMode
        }
    }

})

export const themeReducer = themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;