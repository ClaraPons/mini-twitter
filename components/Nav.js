import { StyleSheet, View, Text } from 'react-native'
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome';



const styles = StyleSheet.create({
    bottomBar: {
    height: 60,
    width: 400,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'navy',
    paddingTop: 10,
    paddingBottom: 10
  },
    textColor: {
        color: "white"
    }
})

const Nav = () => {
  return (
    <View style={styles.bottomBar}>
      <Link to='/'>
        <Icon name="home" size={30} color="white" />
      </Link>
      <Link to='/home'>
        <Icon name="twitter" size={30} color="white" />
      </Link>
      <Link to='/profile'>
        <Icon name="user" size={30} color="white" />
      </Link>
      <Link to='/settings'>
        <Icon name="gear" size={30} color="white" />
      </Link>
    </View>
  )
}

export default Nav