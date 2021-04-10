import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"users",
    initialState:null,
    reducers:{
        SetUser:(user,action)=>{
            console.log("Setting The User in Reducer")
            console.log(action)
            return action.payload.user

        }
        
    }


})
export const {SetUser}=slice.actions;
export default slice.reducer;
