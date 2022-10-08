import React from "react";
import { createContext, useContext } from "react"

export type NameContextType = {
    name: string
    setName:(c: string) => void
}

export const NameContext = React.createContext<NameContextType>({
    name: "",
    setName: () => {}
})

export const useNameContext = () => useContext(NameContext);
