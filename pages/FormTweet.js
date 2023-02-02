import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-native';

import { UserContext } from '../context/User'

import {createTweet} from '../api/tweet'

import {  
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
 } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold', 
    margin: 12,
    color: 'navy'
  },
  subtitle: {
    fontSize: 15,
    textAlign: "left",
    fontWeight: 'bold', 
    marginLeft: 15,
    color: 'navy'
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    borderColor: 'navy',
    padding: 10,
    width: 300,
    color: 'navy',
  },
    textarea: {
        height: 170,
        margin: 15,
        borderWidth: 1,
        borderColor: 'navy',
        padding: 10,
        width: 300,
        color: 'navy',
    },
    bloc: {
        marginTop: 30,
    },
    button: {
        backgroundColor: 'navy',
        margin: 70,
        padding: 7,
        borderRadius: 10,
        marginTop: 10,
    }
});

const Profile = () => {
  const navigate = useNavigate()  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { user, tweet, token } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
        navigate('/')
    }
  }, [user])

  const fetchdata = async () => {
    const id = user.id
    const data = await createTweet(title, content, id, token)
    console.log(data)
  }


// console.log(user.id)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{user?.user_metadata.firstName} {user?.user_metadata.lastName}</Text>
        <Text style={styles.title}>Add Tweet </Text>
        <View style={styles.bloc}>
            <Text style={styles.subtitle}>Title </Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={value => setTitle(value)}
            />    
            <Text style={styles.subtitle}>Content</Text>
            <TextInput
                style={styles.textarea}
                value={content}
                onChangeText={value => setContent(value)}
            />
            <View style={styles.button}>
                <Button title='Submit' color='white' onPress={fetchdata}/>
            </View>
        </View>
    </View>
  );
}


export default Profile