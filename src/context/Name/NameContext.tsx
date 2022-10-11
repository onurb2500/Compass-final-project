import React from "react";
import { createContext, useContext } from "react"

export type NameContextType = {
    name: string
    setName:(c: string) => void
    boolean: boolean
    setBoolean:(c: boolean) => void
}

export const NameContext = React.createContext<NameContextType>({
    name: "",
    setName: () => {},
    boolean: false,
    setBoolean: () => {}
})
export const useNameContext = () => useContext(NameContext);
