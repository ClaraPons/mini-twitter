import { NativeRouter, Routes, Route } from 'react-router-native'
import { StyleSheet, View, Text } from 'react-native'

import Login from './pages/Login'
import Nav from './components/Nav'

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
        </Routes>

          <Nav/>
      </NativeRouter>
    </View>
  )
}

export default App