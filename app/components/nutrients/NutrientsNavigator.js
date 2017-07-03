import { StackNavigator } from 'react-navigation'

import NutrientsView from './NutrientsView'
import NutrientView from './NutrientView'

const NutrientsNavigator = StackNavigator({
  Home: { screen: NutrientsView },
  Nutrient: { screen: NutrientView },
})

export default NutrientsNavigator
