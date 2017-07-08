import { StackNavigator } from 'react-navigation'

import NutrientsScreen from './NutrientsScreen'
import NutrientDetailScreen from './NutrientDetailScreen'

const NutrientsNavigator = StackNavigator({
  Nutrients: {
    screen: NutrientsScreen,
    path: '/list',
    navigationOptions: {
      header: null,
    },
  },
  NutrientDetail: {
    screen: NutrientDetailScreen,
    path: '/detail/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name} - Nutrient`,
    }),
  },
})

export default NutrientsNavigator
