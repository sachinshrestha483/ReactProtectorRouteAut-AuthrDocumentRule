import "./App.css";
import Navbar from "./Components/Navbar";
import RouterFunction from "./RouterFunction";
import getUser from "./Firebase/FirebaseHooks/GetCurrentUser";
import store from "./Store/Configurestore";
import { SetUser } from "./Store/Auth/UserReducer";
import User from "./Models/User";

function App() {
  

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
