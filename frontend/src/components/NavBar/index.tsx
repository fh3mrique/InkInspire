import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import "bootstrap/js/src/collapse.js"; // Verifique se isso é necessário
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react"; // Adicionei useState para controlar o estado do menu
import { AuthContext } from "../../AuthContext";
import {
  getTokenData,
  isAuthenticated,
  removeAuthData,
} from "../../utils/request";

const NavBar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar se o menu está aberto

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar entre aberto e fechado
  };

  return (
    <nav className="main-nav navbar navbar-expand-md">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4><span>Ink</span>Inspire</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu} // Chame a função toggleMenu ao clicar no botão do menu
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="portfolios" onClick={toggleMenu}>Portifólios</NavLink>
            </li>
            <li>
              <NavLink to="admin" onClick={toggleMenu}>ADMIN</NavLink>
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
            <Link to="/admin/auth" onClick={toggleMenu}>LOGIN</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;