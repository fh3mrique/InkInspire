import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./Navbar";
import "./styles.css";
import Users from "./User";

const Admin = () => {
  return (
    <div className="admin-container">
      <NavBar />
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<Navigate to="tattoo" replace />} />
          <Route path="tattoo" element={<h1>Product CRUD</h1>} />
          <Route path="style" element={<h1>Style CRUD</h1>} />
          <Route path="artist" element={<Users/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
