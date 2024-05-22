import { useState } from "react";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from "./appRouter";
import { AuthContext, AuthContextData } from "./AuthContext";

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });
  return (
    <>
      <AuthContext.Provider value={{authContextData, setAuthContextData}}>
        <AppRouter />
        <ToastContainer/>
      </AuthContext.Provider>
    </>
  );
}

export default App;
