import { StackNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen'

const Root = StackNavigator({
  Home: { screen: HomeScreen },
})


export default Root
