import { createContext, useEffect, useState } from 'react'

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)


    const value = {
        setToken,
        user,
        token,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
