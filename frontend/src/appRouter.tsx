import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Portfolios from "./pages/Portfolios";
import TattooDetails from "./pages/TattooDetails";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/portfolios/:tattooId" element={<TattooDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
