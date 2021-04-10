import LoginPage from "./Pages/IdentityPages/LoginPage";
import SignUpPage from "./Pages/IdentityPages/SignUpPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import PublicPage from "./Pages/PublicPage";
import PrivatePage from "./Pages/PrivatePage";
import PrivateRoute from "./PrivateRoute"
import GetUser from "./Firebase/FirebaseHooks/GetCurrentUser"
const RouterFunction = () => {
  const {user}= GetUser();

const isAdmin=()=>{
return true;
}
const isLoggedin=()=>{
console.log("----User in Router----")
console.log(user)
if(user==null){
  return false;
}
else{
  return true;
}
}






  return (
    <Router>
      <Navbar />
      <div className="container"></div>
      <div className="App container">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/Login">
              <LoginPage />
            </Route>

            <PrivateRoute path="/PrivatePage" component={PrivatePage} redirect="/" validateFunction={isLoggedin()}  />

            <Route exact path="/SignUp">
              <SignUpPage />
            </Route>
            <Route exact path="/PublicPage">
              <PublicPage />
            </Route>
            <Route exact path="/PrivatePage1">
              <PrivatePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default RouterFunction;
