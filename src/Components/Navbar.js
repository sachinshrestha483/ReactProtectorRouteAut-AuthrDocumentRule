import { useState } from "react";
import { Link } from "react-router-dom";
import store from "./../Store/Configurestore";
import UseLogout from "./../Firebase/FirebaseHooks/UseLogout";
import useLogout from "./../Firebase/FirebaseHooks/UseLogout";

// import { SetUser } from "./Store/Auth/UserReducer";
// import User from "./Models/User";

const Navbar = () => {
  const [showSmallMenu, setSmallMenu] = useState(true);
  const [user, setUser] = useState(null);

  //let user=null
  const { Logout } = useLogout();

  const userLogout = async () => {
    await Logout();
  };

  console.log("--------State in Navbar-------");
  console.log(store.getState());
  //setUser(store.getState().userReducer);
  console.log("---------user-----------------");
  console.log(user);
  console.log("--------State in Navbar-------");
  store.subscribe(() => {
    console.log("Store Changed Navbar User Update");
    // console.log(store.getState());
    //   setUser(store.getState().userReducer);
    setUser(store.getState().userReducer);
  });

  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
        <Link to="/" class="navbar-brand" href="#">
          Lab App
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link active" to="/">
              Home <span class="sr-only"></span>
            </Link>
            <Link class="nav-item nav-link" to="/Login">
              Login
            </Link>
            <Link class="nav-item nav-link" to="/SignUp">
              Register
            </Link>
            <Link class="nav-item nav-link" to="/PublicPage">
              Public Page
            </Link>
            <Link class="nav-item nav-link" to="/PrivatePage">
              Private Page
            </Link>
          </div>
        </div>
      </nav> */}

      <div className="px-4 py-3 text-xl  text-white w-full bg-blue-400">
        <div className="flex flex-row items-center">
          <div className="text-3xl mr-4">Navbar</div>

          <div className="flex flex-row items-center">
            <Link
              className="
              mx-2 
              hidden
              sm:inline-flex 
              text-white
              no-underline "
              to="/"
            >
              Home
            </Link>
            <Link
              className="
          mx-2 
          hidden
          sm:inline-flex 
          text-white
          no-underline "
              to="/PublicPage"
            >
              Public&nbsp;Page
            </Link>
            <Link
              className="
          mx-2 
          hidden
          sm:inline-flex 
          text-white
          no-underline "
              to="/PrivatePage"
            >
              Private&nbsp;Page
            </Link>
          </div>

          <div class="flex flex-row-reverse w-full items-center">
            <div
              className="text-white sm:hidden"
              onClick={() => {
                setSmallMenu((showSmallMenu) => !showSmallMenu);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-list text-white"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>

            {user == null ? (
              <Link
                className="
            mx-2 
            hidden
            sm:inline-flex 
            text-white
            no-underline "
                to="/Login"
              >
                Login
              </Link>
            ) : null}

            {user == null ? (
              <Link
                className="
            mx-2 
            hidden
            sm:inline-flex 
            text-white
            no-underline "
                to="/SignUp"
              >
                Sign Up
              </Link>
            ) : null}

            {user ? (
              <div
                className="
          mx-2 
          hidden
          sm:inline-flex 
          text-white
          no-underline "
                to="/SignUp"
                onClick={userLogout}
              >
                Logout
              </div>
            ) : null}

            {user != null ? (
              <div
                className="
            mx-2 
            hidden
            sm:inline-flex 
            text-white
            no-underline "
                to="/Login"
              >
                Hi {user.name} !
              </div>
            ) : null}

            {/* <div></div> */}
          </div>
        </div>
      </div>
      {showSmallMenu ? (
        <div
          className=" sm:hidden
          block	 "
        >
          <div
            class="flex flex-col text-xl
           
          text-white  bg-blue-400
          
          "
          >
            <div className="p-2">
              <Link
                className="
            mx-2 
            text-white
            no-underline "
                to="/Login"
              >
                Login
              </Link>
            </div>
            <div className="p-2">
              <Link
                className="
            mx-2 
            text-white
            no-underline "
                to="/Login"
              >
                Login
              </Link>
            </div>
            <div className="p-2">
              <Link
                className="
            mx-2 
            text-white
            no-underline "
                to="/Login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div className="p-4 w-full ">
        <div className="flec"></div>
      </div>
    </div>
  );
};

export default Navbar;
