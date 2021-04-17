import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "GroupTest",
  initialState: { isLoaded: false, groupTests: [] },
  reducers: {
    // action => action Handler
    setGroupTests: (groupTests, action) => {
      console.log("------group Test action------");
      console.log(action);
      console.log("------group Test action------");

      return action.payload;
    },
  },
});

export const { setGroupTests } = slice.actions;
export default slice.reducer;
