import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./Navbar";
import "./styles.css";
import Users from "./User";
import Tattoos from "./Tattoos";

// @ts-ignore
const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("AuthData") !== null;
/*   console.log("isAuth: ", isAuthenticated);
 */  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const Admin = () => {
  return (
    <div className="admin-container">
      <NavBar />
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<Navigate to="tattoo" replace />} />
          <Route
            path="tattoo/*"
            element={
              <PrivateRoute redirectTo="/admin/auth/login">
                <Tattoos/>
              </PrivateRoute>
            }
          />
          <Route
            path="style"
            element={
              <PrivateRoute redirectTo="/admin/auth/login">
                <h1>styles CRUD</h1>
              </PrivateRoute>
            }
          />
          <Route
            path="artist"
            element={
              <PrivateRoute redirectTo="/admin/auth/login">
                <Users />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
