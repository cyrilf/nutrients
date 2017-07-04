import { StackNavigator } from 'react-navigation'

import FoodScreen from './FoodScreen'
import FoodDetailScreen from './FoodDetailScreen'

const FoodNavigator = StackNavigator({
  Food: {
    screen: FoodScreen,
    path: '/list',
    navigationOptions: {
      header: null,
    },
  },
  FoodDetail: {
    screen: FoodDetailScreen,
    path: '/detail/:name',
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
    }),
  },
})

export default FoodNavigator
