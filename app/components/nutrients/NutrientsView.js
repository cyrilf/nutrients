import React, { Component } from 'react'
import { View } from 'native-base'

import { List } from 'components/list'
import NutrientModal from 'components/NutrientModal/NutrientModal'

// Rename 'ressources/data/nutrients.sample.json' file to 'ressources/data/nutrients.json'
import nutrientsData from 'ressources/data/nutrients.json'

class NutrientsView extends Component {
  constructor(props) {
    super(props)

    this.state = { selectedItem: null }
    this.setSelectedItem = this.setSelectedItem.bind(this)
  }

  setSelectedItem(item = null) {
    this.setState({ selectedItem: item })
  }

  render() {
    const { selectedItem } = this.state

    return (
      <View>
        <List data={nutrientsData.nutrients} onItemPress={this.setSelectedItem} />
        <NutrientModal
          selectedItem={selectedItem}
          onClose={() => this.setSelectedItem(null)}
        />
      </View>
    )
  }
}

export default NutrientsView
