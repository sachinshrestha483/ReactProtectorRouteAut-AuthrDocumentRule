import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "Subtest",
  initialState: { isLoaded: false, subTests: [] },
  reducers: {
    // action => action Handler
    setSubTests: (subtest, action) => {
      console.log(action);

      return action.payload;
    },
  },
});

export const { setSubTests } = slice.actions;
export default slice.reducer;
