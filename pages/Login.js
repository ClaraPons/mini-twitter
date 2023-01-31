import { useState, useEffect } from 'react'
import Config from 'react-native-config'
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

const App = () => {
  const [email, setEmail] = useState('dardekamla@gufum.com')
  const [password, setPassword] = useState('temptemp')
  const [error, setError] = useState('')


//   useEffect(() => {
//     if (user) {
//       fetchCocktails()
//     }
//   }, [user])

const handleSubmit = async () => {
    const request = await fetch(
      'https://zpydwdufeaornslpvwds.supabase.co/auth/v1/token?grant_type=password',
      {
        method: 'POST',
        headers: {
          apikey:
          Config.API_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }
    )

    const response = await request.json()
    console.log(response)

    if (request.status > 200) {
      setError(response.error_description)
    } else {
      setError('')
      setUser(response)
      alert('connect')
    }
  }

  const handleNavigate = () => {
    alert('Changer de page')
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
      <Button title='Login' onPress={handleSubmit} />
      {error && <Text >{error}</Text>}
      <Text style={styles.text}>Vous n'êtes pas inscrit ? </Text>
      <Button title="Je m'inscris" onPress={handleNavigate}/>
    </View>
  );
}


export default App