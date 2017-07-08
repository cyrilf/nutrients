import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'native-base'

import { List } from 'components/list'

import foodData from 'ressources/data/food.json'

class FoodView extends Component {
  constructor(props) {
    super(props)

    this.openFoodDetailView = this.openFoodDetailView.bind(this)
  }

  openFoodDetailView(item = {}) {
    this.props.navigation.navigate('FoodDetail', { item, name: item.name })
  }

  render() {
    return (
      <View style={stylesNB.view}>
        <List data={foodData.food} onItemPress={this.openFoodDetailView} />
      </View>
    )
  }
}

FoodView.propTypes = {
  navigation: PropTypes.object,
}

const stylesNB = {
  view: {
    backgroundColor: '#f5f5f5',
  },
}

const findFoodByName = (name) => foodData.food.find((food) => food.name.toLowerCase() === name.toLowerCase())

export default FoodView
export { findFoodByName }
