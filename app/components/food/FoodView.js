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

  openFoodDetailView(item = null) {
    this.props.navigation.navigate('FoodDetail', { item })
  }

  render() {
    return (
      <View>
        <List data={foodData.food} onItemPress={this.openFoodDetailView} />
      </View>
    )
  }
}

FoodView.propTypes = {
  navigation: PropTypes.object,
}

export default FoodView
