import { Navigate, Outlet } from "react-router";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { useNameContext } from "../../context/Name/NameContext";
import { useState } from "react";



const ProtectedRoutes = () => {
    const { name } = useNameContext();

    return name.length > 0 ? <Home/> : <Navigate to={"/login"}/>;
}

export default ProtectedRoutes