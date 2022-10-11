import React from "react"
import { Navigate, Outlet } from "react-router";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { useNameContext } from "../../context/Name/NameContext";
import { useState } from "react";



const ProtectedRoutes = ({children}: any) => {
    const { boolean } = useNameContext();

    return boolean ? children : <Navigate to={"/login"}/>;
}

export default ProtectedRoutes