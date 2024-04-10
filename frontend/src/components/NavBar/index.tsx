import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";
import "bootstrap/js/src/collapse.js";
import {
  getTokenData,
  isAuthenticated,
  removeAuthData,
} from "../../utils/request";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";


const NavBar = () => {

  const {authContextData, setAuthContextData} = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    navigate("/");
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

        <div className="nav-login-logout">
          {authContextData.authenticated ? (
            <>
              <span>{authContextData.tokenData?.user_name}</span>
              <a href="#logout" onClick={handleLogoutClick}>
                LOGOUT
              </a>
            </>
          ) : (
            <a href="#login">LOGIN</a>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
