import { StackNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen'
import NutrientView from 'components/nutrients/NutrientView'

const Root = StackNavigator({
  Home: { screen: HomeScreen },
  NutrientView: { screen: NutrientView },
})


export default Root
