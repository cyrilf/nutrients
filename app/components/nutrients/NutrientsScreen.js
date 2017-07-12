import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'native-base'

import { List } from 'components/list'

// Rename 'ressources/data/nutrients.sample.json' file to 'ressources/data/nutrients.json'
import nutrientsData from 'ressources/data/nutrients.json'

class NutrientsView extends Component {
  constructor(props) {
    super(props)

    this.openNutrientView = this.openNutrientView.bind(this)
    const priorityNutrients = getPriorityNutrients()
    this.nutrientsDataSorted = [ ...priorityNutrients, ...nutrientsData.nutrients ]
  }

  openNutrientView(item = {}) {
    this.props.navigation.navigate('NutrientDetail', { item, name: item.name })
  }

  render() {
    return (
      <View style={stylesNB.view}>
        <List data={this.nutrientsDataSorted} onItemPress={this.openNutrientView} />
      </View>
    )
  }
}

NutrientsView.propTypes = {
  navigation: PropTypes.object,
}

const stylesNB = {
  view: {
    backgroundColor: '#f5f5f5',
  },
}

const findNutrientByName = (name) => nutrientsData.nutrients.find((nutrient) => nutrient.name.toLowerCase() === name.toLowerCase())
const getPriorityNutrients = () => nutrientsData.nutrients.filter((nutrient) => nutrient.priority)

export default NutrientsView
export { findNutrientByName }
