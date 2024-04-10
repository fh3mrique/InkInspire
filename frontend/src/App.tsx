import { useState } from "react";
import "./App.css";
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
      </AuthContext.Provider>
    </>
  );
}

export default App;
