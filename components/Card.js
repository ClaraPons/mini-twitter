import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    list: {
        fontSize: 20,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'left',
        borderColor: '#3498DB',
        borderWidth: 1,
        borderRadius: 5,
        color: 'navy',
      },
    text:{
        paddingTop:15,
        paddingBottom:30,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 13,
    }
})

const Card = ({ item }) => {
  return (
    <View style={styles.list}>
          <Icon.Button name="twitter" >
             <Text style={{ color: "white", fontSize: 15, padding: 5 }}>{item.title}</Text>
        </Icon.Button>
        <Text style={styles.text}>{item.content}</Text>
    </View>
  )
}

export default Card