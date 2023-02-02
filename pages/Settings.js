import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-native';

import { UserContext } from '../context/User'
import Card from '../components/Card'


import {  
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
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
  button: {
    backgroundColor: 'navy',
    margin: 40,
    padding: 7,
    borderRadius: 10,
    marginBottom: 0,
}
});

const Profile = () => {
  const navigate = useNavigate()  
  const { user, tweet } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
        navigate('/')
    }
  }, [user])

  const handleCreateTweet = () => {
    navigate('/add-tweet')
  }

console.log(tweet)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Profil de {user?.user_metadata.firstName} {user?.user_metadata.lastName}</Text>
        <View style={styles.button}>
            <Button title='Créer un Tweet' color='white' onPress={handleCreateTweet}/>
        </View>
        <View style={styles.button}>
            <Button title='Modifier Tweet' color='white' onPress={handleCreateTweet}/>
        </View>
        <View style={styles.button}>
            <Button title='Modifier mon profil' color='white' onPress={handleCreateTweet}/>
        </View>
    </View>
  );
}


export default Profile