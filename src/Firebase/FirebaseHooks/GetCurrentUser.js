import { auth } from "./../../Firebase/FirebaseUtils";
import store from "./../../Store/Configurestore";
import { SetUser } from "./../../Store/Auth/UserReducer";
import User from "./../../Models/User";

// refs
let user = auth.currentUser;

// auth changes
auth.onAuthStateChanged(async (_user) => {
  console.log("User state change. Current user is:", _user);
  user = _user;

  if (user != null) {
    console.log(user.uid);
    const userObject = new User();
    let obj = await userObject.GetUser(user.uid);

    console.log(obj);
    store.dispatch(SetUser({ user: obj }));

  } else {
    store.dispatch(SetUser({ user: null }));
  }
});

const getUser = () => {
  return { user };
};

export default getUser;
