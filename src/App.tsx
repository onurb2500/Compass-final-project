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
	const [boolean, setBoolean] = useState<boolean>(false);
	const [isAuth, setIsAuth] = useState(false);

	return (
		<NameContext.Provider value={{ name, setName, boolean, setBoolean }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={
						<ProtectedRoutes>
							<Home/>
						</ProtectedRoutes>
					} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</NameContext.Provider>
	);
}

export default App;
