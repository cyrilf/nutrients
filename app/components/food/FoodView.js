import React, { Component } from 'react'
import { View } from 'native-base'

import { List } from 'components/list'
import Modal from 'components/modal/Modal'
import FoodModalContent from './FoodModal/FoodModalContent'

import foodData from 'ressources/data/food.json'

class FoodView extends Component {
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
        <List data={foodData.food} onItemPress={this.setSelectedItem} />
        <Modal
          selectedItem={selectedItem}
          onClose={() => this.setSelectedItem(null)}
        >
          <FoodModalContent item={selectedItem} />
        </Modal>
      </View>
    )
  }
}

export default FoodView
