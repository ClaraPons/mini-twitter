import { NativeRouter, Routes, Route } from 'react-router-native'
import { StyleSheet, View, Text } from 'react-native'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Nav from './components/Nav'
import Profile from './pages/Profile'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const App = () => {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

          <Nav/>
      </NativeRouter>
    </View>
  )
}

export default App