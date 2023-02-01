import { createContext } from 'react'

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const value = {
    user: {
      firstName: 'Jack'
    }
  }

  console.log(value)

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
