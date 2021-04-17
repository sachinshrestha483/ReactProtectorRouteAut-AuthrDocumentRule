import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "Test",
  initialState: { isLoaded: false, tests: [] },
  reducers: {
    // action => action Handler
    setTests: (test, action) => {
      console.log(action);

      return action.payload;
    },
  },
});

export const { setTests } = slice.actions;
export default slice.reducer;
