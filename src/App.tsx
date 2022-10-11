import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider/index";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { SignUp } from "./pages/SignUp";
import { NameContext } from "./context/Name/NameContext";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
	const [name, setName] = useState<string>("");
	const [isAuth, setIsAuth] = useState(false);

	return (
		<NameContext.Provider value={{ name, setName }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					{/* <Route element={<ProtectedRoutes />}> */}
					<Route path="/home" element={<Home />} />
					{/* </Rout;e> */}
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</NameContext.Provider>
	);
}

export default App;
