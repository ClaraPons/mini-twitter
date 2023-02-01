import { createContext, useEffect, useState } from 'react'

const UserContext = createContext({})

const UserContextProvider = props => {
    // console.log('test')

    // const [token, setToken] = useState('')
    // const [user, setUser] = useState(null)

    // const value = {
    //     setToken,
    //     user,
    //     token,
    //     setUser
    // }

    const value = {
        key:'toto'
    }
    
    console.log(value)
    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
