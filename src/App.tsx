import React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider/index"
import { ProtectedLayout } from "./components/ProtectedLayout";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
      <BrowserRouter>
        <Routes>  
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
