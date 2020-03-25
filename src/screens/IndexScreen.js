import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state, addBlog, deleteBlog } = useContext(Context)
  
  const singlePost = (post) => (
    <TouchableOpacity onPress={() => navigation.navigate('Single', { post })}>
      <View style={styles.row} >
        <TouchableOpacity style={styles.flex1}>
          <Text style={styles.text} >{post.title}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => deleteBlog(post.id)}>
          <Feather name='trash-2' style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )

  return (
    <View>
      <FlatList keyExtractor={(item) => item.title} data={state} renderItem={({ item }) => singlePost(item)} />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Feather name='plus' style={styles.add} />
    </TouchableOpacity>)
  }
}

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 25,
    paddingVertical: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 24,
  },
  icon: {
    fontSize: 24,
    color: 'red'
  },
  addBtn: {
    padding: 12,
    alignSelf: 'center',
    marginTop: 8,
    alignItems: 'center',
    backgroundColor: '#0077EE',
    borderRadius: 4,
  },
  textLight: {
    fontSize: 20,
    color: 'white'
  },
  add: {
    fontSize: 24,
    marginRight: 8,
    color: 'grey'
  }
})

export default IndexScreen