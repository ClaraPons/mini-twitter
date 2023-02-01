import { StyleSheet, View, Text } from 'react-native'
import { Link } from 'react-router-native'

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
        <Text style={styles.textColor}>Login</Text>
      </Link>
      <Link to='/profile'>
        <Text style={styles.textColor}>Tweets</Text>
      </Link>
    </View>
  )
}

export default Nav