import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-native';

import { UserContext } from '../context/User'
import Card from '../components/Card'


import {  
  StyleSheet,
  Text,
  View,
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
});

const Profile = () => {
  const navigate = useNavigate()  
  const { user, tweet } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
        navigate('/')
    }
  }, [user])

console.log(tweet)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile <Text style={styles.subtitle}>{user?.user_metadata.firstName} {user?.user_metadata.lastName}</Text></Text>
      <FlatList
        data={tweet}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.content}
      />
    </View>
  );
}


export default Profile