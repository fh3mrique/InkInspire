import { Link, NavLink } from "react-router-dom";
import "./styles.css";

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
          <li>
            <a>Admin</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
