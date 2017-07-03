import { TabNavigator } from 'react-navigation'

import NutrientsNavigator from 'components/nutrients'
import FoodNavigator from 'components/food'


const Root = TabNavigator({
  Nutrients: {
    screen: NutrientsNavigator,
  },
  Food: {
    screen: FoodNavigator,
  },
})



export default Root
