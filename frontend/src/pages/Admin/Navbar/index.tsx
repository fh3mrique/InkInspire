import { Link, NavLink } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <div>
      <nav className="admin-nav-container">
        <ul className="ul">
          <li>
            <NavLink to="tattoo" className="admin-nav-item">
              <p>Tattoos</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="style" className="admin-nav-item">
              <p>Styles</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="artist" className="admin-nav-item">
              <p>Artistas</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
