import "./App.css";
import Navbar from "./Components/Navbar";
import RouterFunction from "./RouterFunction";
import getUser from "./Firebase/FirebaseHooks/GetCurrentUser";
import store from "./Store/Configurestore";
import { SetUser } from "./Store/Auth/UserReducer";
import User from "./Models/User";

function App() {
  const user = getUser();
  console.log(user);
  
  const updateUser=async()=>{
    const userObject = new User();
    console.log("------------User Id--------------")
    console.log(user.uid)

    let obj = await userObject.GetUser(user.user.uid);
    console.log("----loaded object----")
    console.log(obj)
     console.log("Setting the user")
    store.dispatch(SetUser({ user: obj }));
    console.log("user in State");
    console.log(store.getState());
  }
  updateUser();


  return (
    <div className="App">
      {/* <Navbar /> */}
      <RouterFunction />
    </div>
  );
}

export default App;

{
  /* <Router>
        <div className="container">

        </div>
        <div className="App container">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <h1>dsd</h1>
              </Route>

              <Route exact path="/Login">
                <LoginPage />
              </Route>

              <Route exact path="/SignUp">
                <SignUpPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router> */
}
