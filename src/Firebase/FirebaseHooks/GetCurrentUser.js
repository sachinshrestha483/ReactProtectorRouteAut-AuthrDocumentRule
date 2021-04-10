import { auth } from "./../../Firebase/FirebaseUtils";
import store from "./../../Store/Configurestore";
import { SetUser } from "./../../Store/Auth/UserReducer";
import User from "../../Models/User";

// refs
let user = auth.currentUser;



// auth changes
auth.onAuthStateChanged((_user) => {
  console.log("User state change. Current user is:", _user);
  user = _user;
  console.log("---------Setted User-------- ");
  if (user != null) {
    console.log(user.uid);
    console.log("user in State");
    console.log(store.getState());
  }
});

const getUser = () => {
  return { user };
};

export default getUser;
