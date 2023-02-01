import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-native';
// import { useContext } from 'react'
// import { UserContext } from '../context/User'
import {AsyncStorage} from 'react-native'
import {login} from '../api/auth'

import {  
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
 } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'navy',
    padding: 10,
    width: 300,
    color: 'navy'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold', 
    margin: 12,
    color: 'navy'
  },
  subtitle: {
    fontSize: 37,
    fontWeight: 'regular', 
    marginBottom:12,
    color: 'navy'
  },
  text: {
    fontSize: 12,
    fontWeight: 'thin',
    marginTop: 12,
    color: 'navy'
  }, 
});

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('dardekamla@gufum.com')
  const [password, setPassword] = useState('temptemp')
  // const context = useContext(UserContext)

  // console.log(context)

const fetchdata = async () => {
  const data = await login(email, password)
  // console.log(data);
  // context.setToken(data)
}
// console.log(token);

const handleNavigate = () => {
  navigate('/signup')
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login <Text style={styles.subtitle}>Mini-Twitter</Text></Text>
      
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />    

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry
      />
      <Button title='Login' onPress={fetchdata} />
      <Text style={styles.text}>Vous n'êtes pas inscrit ? </Text>
      <Button title="Je m'inscris" onPress={handleNavigate}/>
    </View>
  );
}


export default Login