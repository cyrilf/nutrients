import { StackNavigator } from 'react-navigation'

import FoodView from './FoodView'
import FoodDetailView from './FoodDetailView'

const FoodNavigator = StackNavigator({
  Home: { screen: FoodView },
  FoodDetail: { screen: FoodDetailView },
})


export default FoodNavigator
