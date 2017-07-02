import React from 'react'
import PropTypes from 'prop-types'
import { ListItem as NBListItem, Text } from 'native-base'

const ListItem = ({item, onPress}) => {
  return (
    <NBListItem button onPress={() => onPress(true, item)}>
      <Text>{item.name}</Text>
    </NBListItem>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
}

export default ListItem
