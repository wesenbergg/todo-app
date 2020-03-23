import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const CreateBlogScreen = () => {
  
  return (
    <View>
        <Text style={styles.title}>Create Blog post</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  }
})

export default CreateBlogScreen