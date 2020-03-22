import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const SingleScreen = ({ navigation }) => {

  const post = navigation.getParam('post')
  
  return (
    <View>
        <Text style={styles.title}>{post.title} - {post.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  }
})

export default SingleScreen