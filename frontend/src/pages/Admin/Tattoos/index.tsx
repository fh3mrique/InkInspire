import { Route, Routes } from "react-router-dom";
import List from "./List";
import Form from "./Form";

const Tattoos = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path=":tattooId" element={<Form />} />
    </Routes>
  );
};

export default Tattoos;
