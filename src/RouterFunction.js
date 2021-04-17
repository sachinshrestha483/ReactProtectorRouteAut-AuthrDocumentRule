import LoginPage from "./Pages/IdentityPages/LoginPage";
import SignUpPage from "./Pages/IdentityPages/SignUpPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import PublicPage from "./Pages/PublicPage";
import PrivatePage from "./Pages/PrivatePage";
import PrivateRoute from "./PrivateRoute"
import GetUser from "./Firebase/FirebaseHooks/GetCurrentUser"
import LabSettings from "./Pages/LabSettings";
import GroupPage from "./Pages/DomainPages/GroupPage";
import SubtestPage from "./Pages/DomainPages/SubTestPage";
import ViewAndEditSubtestPage from "./Pages/DomainPages/ViewAndEditSubtestPage";
import ViewAndEditTestPage from "./Pages/DomainPages/ViewAndEditTestPage";


import TestPage from "./Pages/DomainPages/TestPage";


const RouterFunction = () => {
  const {user}= GetUser();/// here is  where we set the state of user 

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


            <Route exact path="/LabSettings">
              <LabSettings />
            </Route>

            <Route exact path="/GroupPage">
              <GroupPage />
            </Route>

            
            <Route exact path="/SubtestPage">
              <SubtestPage />
            </Route>

            <Route exact path="/SubtestListPage">
              <ViewAndEditSubtestPage />
            </Route>

            <Route exact path="/TestListPage">
              <ViewAndEditTestPage />
            </Route>

            <PrivateRoute path="/PrivatePage" component={PrivatePage} redirect="/" validateFunction={isLoggedin()}  />

            <Route exact path="/SignUp">
              <SignUpPage />
            </Route>
            <Route exact path="/TestPage">
              <TestPage />
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
