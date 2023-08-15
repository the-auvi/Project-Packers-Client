import { createContext, useReducer, useState } from "react";

export const UserContext = createContext()


export const UserProvider = ({ children }) => {
    // initialize state
    const initialState = {
        email: null,
        fullName: null,
        id: null,
        role: null,
        access: null,
        avatar: null,
    }

    // reducer
    const UserReducer = (state, action) => {
        switch (action.type) {
            case "SAVE_USER":
                return {
                    email: action.payload.email,
                    fullName: action.payload.fullName,
                    id: action.payload.id,
                    role: action.payload.role,
                    access: action.payload?.access,
                    avatar: action.payload?.avatar
                }
            case "REMOVE_USER":
                return {
                    email: null,
                    fullName: null,
                    id: null,
                    role: null,
                    access: null,
                    avatar: null,
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    return <UserContext.Provider value={{ data: state, dispatch }}>
        {children}
    </UserContext.Provider>
}