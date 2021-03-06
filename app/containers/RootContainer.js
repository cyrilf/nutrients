import { DrawerNavigator, StackNavigator } from 'react-navigation'

import HomeNavigator from './HomeNavigator'

const HomeStackNavigator = StackNavigator({
  Home: { screen: HomeNavigator },
}, {
  navigationOptions: {
    header: null,
  },
})

const RootContainer = DrawerNavigator({
  Home: {
    screen: HomeStackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
})

export default RootContainer
