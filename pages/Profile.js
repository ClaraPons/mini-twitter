import { useState, useEffect } from 'react'
import { API_KEY } from "@env"

import {  
  StyleSheet,
  Text,
  View,
 } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold', 
    margin: 12,
    color: 'navy'
  },
});

const Profile = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile<Text style={styles.subtitle}>Mini-Twitter</Text></Text>
  </View>
  );
}


export default Profile