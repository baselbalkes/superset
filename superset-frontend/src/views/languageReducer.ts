import { createSlice } from "@reduxjs/toolkit";
interface LanguageState{
    lang:string,
   
}
const initialState={
    lang:localStorage.getItem('lang')
} as LanguageState
export const languageReducer=createSlice({
    name:'lang',
    initialState,
    reducers:{
        setLang:(state,action)=>{
           state.lang=action.payload;
           
        },
      

    }
})
export const {setLang}=languageReducer.actions