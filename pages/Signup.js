import { useState, useEffect } from 'react'
import { API_KEY } from "@env"
import { useNavigate } from 'react-router-native';
import { useContext } from 'react'
import { UserContext } from '../context/User'

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

const Signup = () => {
  const navigate = useNavigate()  
  const [email, setEmail] = useState('dardekamla@gufum.com')
  const [password, setPassword] = useState('temptemp')

  const { user, token } = useContext(UserContext)

  useEffect(() => {
    console.log(user)
  }, [token])

const handleSubmit = async () => {
    const request = await fetch(
      'https://zpydwdufeaornslpvwds.supabase.co/auth/v1/signup',
      {
        method: 'POST',
        headers: {
          apikey:
          API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }
    )

    const response = await request.json()
    console.log(response)
    navigate('/profile')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up<Text style={styles.subtitle}>Mini-Twitter</Text></Text>
      
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
      <Button title='Submit' onPress={handleSubmit} />
    </View>
  );
}


export default Signup