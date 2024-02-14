import { createSlice } from "@reduxjs/toolkit";
interface LanguageState{
    lang:string
}
const initialState={
    lang:'EN'
} as LanguageState
export const languageReducer=createSlice({
    name:'lang',
    initialState,
    reducers:{
        setArabic:(state)=>{
            state.lang='AR';
            document.documentElement.setAttribute('dir','rtl');
        },
        setEnglish:(state)=>{
            state.lang='EN';
            document.documentElement.setAttribute('dir','ltr');
        }

    }
})
export const {setArabic,setEnglish}=languageReducer.actions