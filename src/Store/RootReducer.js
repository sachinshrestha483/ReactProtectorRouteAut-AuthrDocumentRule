import { combineReducers } from "redux";
import UserReducer from "./Auth/UserReducer"
import domainReducer from "./Domain/dominReducer"

export default combineReducers({
    userReducer: UserReducer,
    domainReducer:domainReducer,
  });