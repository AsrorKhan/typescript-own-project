import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {languageKeys} from "../../helpers/appConstants/languageKeys";

interface IChangeLang {
    lang: languageKeys
}


const initialState: IChangeLang ={
    lang: languageKeys.RU
}

export const changeLangSlice = createSlice({
    name: 'changeLang',
    initialState,
    reducers: {
        changeLanguage(state, action: PayloadAction<IChangeLang>){
            state.lang = action.payload.lang;
        }
    }
})

export default changeLangSlice.reducer
