import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";
import "bootstrap/js/src/collapse.js";
import {
  TokenData,
  getTokenData,
  isAuthenticated,
  removeAuthData,
} from "../../utils/request";
import { useEffect, useState } from "react";

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const NavBar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false,
    });
    navigate('/');
  };

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

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#inkinspire-navbar"
          aria-controls="inkinspire-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div /* className="collapse navbar-collapse" */ id="inkinspire-navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolios">Portifolios</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
        </div>

        <div>
          {authData.authenticated ? (
            <a href="#logout" onClick={handleLogoutClick}>
              LOGOUT
            </a>
          ) : (
            <a href="#login">LOGIN</a>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
