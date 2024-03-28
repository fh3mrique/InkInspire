import { NavLink } from "react-router-dom";
import "./styles.css";
import 'bootstrap/js/src/collapse.js'

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <header>
        <NavLink to="/">
          <div>
            <h1 className="title-logo-home">
              <span>Ink</span>Inspire
            </h1>
          </div>
        </NavLink>

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
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolios">
                Portifolios
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
