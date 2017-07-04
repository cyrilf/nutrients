import { TabNavigator } from 'react-navigation'

import NutrientsNavigator from 'components/nutrients'
import FoodNavigator from 'components/food'


const HomeNavigator = TabNavigator({
  Nutrients: {
    screen: NutrientsNavigator,
    path: '/nutrients',
    navigationOptions: {
      tabBarLabel: 'Nutrients',
    },
  },
  Food: {
    screen: FoodNavigator,
    path: '/food',
    navigationOptions: {
      tabBarLabel: 'Food',
    },
  },
}, {
  tabBarPosition: 'bottom',
})

export default HomeNavigator
