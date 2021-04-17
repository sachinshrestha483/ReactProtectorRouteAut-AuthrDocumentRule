import { combineReducers } from "redux";
import groupTestReducer from "./GroupTest/reducer";
import outLabReducer from "./OutLab/reducer";
import subTestReducer from "./Subtest/reducer"
import testReducer from "./Test/reducer"

export default combineReducers({
  groupTest: groupTestReducer,
  outlab:outLabReducer,
  subTest:subTestReducer,
  test:testReducer

});