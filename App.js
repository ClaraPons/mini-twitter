import { NativeRouter, Routes, Route } from 'react-router-native'
import { StyleSheet, View, Text } from 'react-native'

import { UserContextProvider } from './context/User'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Nav from './components/Nav'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import FormTweet from './pages/FormTweet'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const App = () => {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <UserContextProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/add-tweet' element={<FormTweet />} />
          </Routes>

          <Nav />
        </UserContextProvider>
      </NativeRouter>
    </View>
  )
}

export default App
