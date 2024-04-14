import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import "bootstrap/js/src/collapse.js";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import {
  getTokenData,
  isAuthenticated,
  removeAuthData,
} from "../../utils/request";

const NavBar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

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
    <nav className="main-nav  navbar navbar-expand-md">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4><span>Ink</span>Inspire</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="portfolios">Portifólios</NavLink>
            </li>
            <li>
              <NavLink to="admin">ADMIN</NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-login-logout">
          {authContextData.authenticated ? (
            <>
              <span className="nav-username">
                {authContextData.tokenData?.user_name}
              </span>
              <a href="#logout" onClick={handleLogoutClick}>
                LOGOUT
              </a>
            </>
          ) : (
            <Link to="/admin/auth">LOGIN</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
