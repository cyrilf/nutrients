import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List as NBList, View } from 'native-base'

import ListItem from './ListItem'

class List extends Component {
  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(item) { return (this.props.renderRow && this.props.renderRow(item)) || <ListItem item={item} onPress={this.props.onItemPress} /> }

  render() {
    return (
      <View>
        <NBList
          dataArray={this.props.data}
          renderRow={this.renderRow} />
      </View>
    )
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  onItemPress: PropTypes.func,
  renderRow: PropTypes.func,
}

List.defaultProps = {
  onItemPress: () => { console.warn('Missing List.onItemPress prop') },
}

export default List
