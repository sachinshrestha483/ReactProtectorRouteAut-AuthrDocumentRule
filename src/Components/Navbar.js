import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
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
      </nav>
    </div>
  );
};

export default Navbar;
