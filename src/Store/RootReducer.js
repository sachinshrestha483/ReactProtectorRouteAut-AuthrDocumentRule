import { combineReducers } from "redux";
import UserReducer from "./Auth/UserReducer"


export default combineReducers({
    userReducer: UserReducer,
    
  });