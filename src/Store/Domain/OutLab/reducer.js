import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "OutLab",
  initialState: { isLoaded: false, outLabs: [] },
  reducers: {
    // action => action Handler
    setOutLabs: (groupTests, action) => {
      console.log(action);

      return action.payload;
    },
  },
});

export const { setOutLabs } = slice.actions;
export default slice.reducer;
