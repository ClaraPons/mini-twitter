import { createContext, useState, useEffect } from 'react'
import me from '../api/user'
import {getAlltweet} from '../api/tweet'


const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [tweet, setTweet] = useState(null)

    useEffect(() => {
        if (token) {
            getMe()
            getTweet()
        }
    }, [token])

    const getMe = async () => {
        const userResponse = await me(token)
        setUser(userResponse)
        // console.log(user)
    }

    const getTweet = async () => {
        const tweetResponse = await getAlltweet(token)
        setTweet(tweetResponse)
        // console.log(tweetResponse)
    }

  const value = {
    user, 
    token, 
    setToken, 
    tweet
  }

//   console.log(user)

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
