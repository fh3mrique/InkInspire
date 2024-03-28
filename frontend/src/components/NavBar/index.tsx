import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import 'bootstrap/js/src/collapse.js'

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <header>
        <Link to="/">
          <div>
            <h1 className="title-logo-home">
              <span>Ink</span>Inspire
            </h1>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#inkinspire-navbar"
          aria-controls="inkinspire-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="inkinspire-navbar">
          <ul>
            <NavLink to="/">
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink to="/portfolios">
              <li>
                <a>Portifolios</a>
              </li>
            </NavLink>
            <NavLink to="/admin">
              <li>
                <a>Admin</a>
              </li>
            </NavLink>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
