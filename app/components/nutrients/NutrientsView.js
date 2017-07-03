import React, { Component } from 'react'
import { View } from 'native-base'
import PropTypes from 'prop-types'

import { List } from 'components/list'

// Rename 'ressources/data/nutrients.sample.json' file to 'ressources/data/nutrients.json'
import nutrientsData from 'ressources/data/nutrients.json'

class NutrientsView extends Component {
  constructor(props) {
    super(props)

    this.openNutrientView = this.openNutrientView.bind(this)
  }

  openNutrientView(item = null) {
    this.props.navigation.navigate('NutrientView', { item })
  }

  render() {
    return (
      <View>
        <List data={nutrientsData.nutrients} onItemPress={this.openNutrientView} />
      </View>
    )
  }
}

NutrientsView.propTypes = {
  navigation: PropTypes.object,
}


export default NutrientsView
