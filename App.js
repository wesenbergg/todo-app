import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext'
import SingleScreen from './src/screens/SingleScreen'
import CreateBlogScreen from './src/screens/CreateBlogScreen'



const navigator = createStackNavigator(
  {
    Home: IndexScreen,
    Single: SingleScreen,
    Create: CreateBlogScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blog list"
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return(
    <Provider>
      <App />
    </Provider>
  )
}