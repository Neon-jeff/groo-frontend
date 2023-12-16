import { createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext(null);
export default function AuthContextProvider({ children }) {
    let [isAuth,setAuth]=useState(false)

    const auth_data={
        isAuth,
        setAuth
    }
  return <AuthContext.Provider value={auth_data}>{children}</AuthContext.Provider>;
}
