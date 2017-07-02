import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, View } from 'native-base'

import NutrientListItem from 'components/list/NutrientListItem'

class NutrientList extends Component {
  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(item) { return <NutrientListItem item={item} onPress={this.props.onItemPress} /> }

  render() {
    return (
      <View>
        <List
          dataArray={this.props.nutrients}
          renderRow={this.renderRow} />
      </View>
    )
  }
}

NutrientList.propTypes = {
  nutrients: PropTypes.array.isRequired,
  onItemPress: PropTypes.func,
}

export default NutrientList
