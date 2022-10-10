import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider/index";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { SignUp } from "./pages/SignUp";
import { NameContext } from "./context/Name/NameContext";


function App() {

    const [name, setName] = useState<string>("")

	return (
		<NameContext.Provider value={{name, setName}}>
			<BrowserRouter>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</NameContext.Provider>
	);
}

export default App;
