import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const CreateBlogScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlog }  = useContext(Context) 
  //console.log(navigation.navigate('Index'))
  
  const handleAdd = () => {
    addBlog(title, content, () => navigation.navigate('Home'))
    setTitle('')
    setContent('')
  }

  return (
    <View style={styles.container} >
        <View style={{ }} >
          <Text style={styles.title}>Create Blog</Text>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input} placeholder="Enter title"
            onChangeText={text => setTitle(text)} value={title} />
          <Text style={styles.label}>Content</Text>
          <TextInput style={{...styles.input, marginBottom: 10}} placeholder="Content"
            onChangeText={text => setContent(text)} value={content} />
          <Button title="Create" style={styles.btn} onPress={() => handleAdd() } />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent:'center',
  },
  title: {
    fontSize: 38,
    alignSelf: 'center',
    marginBottom: 20
  },
  label: {
    fontSize: 24
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 5
  },
  btn: {
    margin: 5
  }
})

export default CreateBlogScreen