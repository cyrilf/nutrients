import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, View } from 'native-base'

import NutrientModal from 'components/NutrientModal/NutrientModal'
import NutrientListItem from 'components/list/NutrientListItem'

class NutrientList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
      selectedItem: null,
    }
    this.renderRow = this.renderRow.bind(this)
    this.setModalVisible = this.setModalVisible.bind(this)
  }

  setModalVisible(visible, item) {
    this.setState({
      modalVisible: visible,
      selectedItem: item,
    })
  }

  renderRow(item) { return <NutrientListItem item={item} onPress={this.setModalVisible} /> }

  render() {
    const { modalVisible, selectedItem } = this.state

    return (
      <View>
        <List
          dataArray={this.props.nutrients}
          renderRow={this.renderRow} />
        <NutrientModal
          isVisible={modalVisible}
          selectedItem={selectedItem}
          onClose={() => this.setModalVisible(false, selectedItem)}
        />
      </View>
    )
  }
}

NutrientList.propTypes = {
  nutrients: PropTypes.array.isRequired,
}

export default NutrientList
