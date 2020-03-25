import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation'

const SingleScreen = ({ navigation }) => {

  const post = navigation.getParam('post')
  
  return (
    <View>
        <Text style={styles.title}>{post.title} - {post.id}</Text>
        <Text style={styles.content}>{post.content}</Text>
    </View>
  )
}

SingleScreen.navigationOptions = ({ navigation }) => {
  return({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { post: navigation.getParam('post') })}>
        <Feather name='edit' style={styles.edit} />
      </TouchableOpacity>)
  })
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  },
  content: {
    fontSize: 18
  },
  edit: {
    color: 'grey',
    fontSize: 26, 
    marginRight: 8
  }
})

export default SingleScreen