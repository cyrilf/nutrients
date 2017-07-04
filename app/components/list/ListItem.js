import React from 'react'
import PropTypes from 'prop-types'
import { ListItem as NBListItem, Text } from 'native-base'

const ListItem = ({item, onPress}) => {
  return (
    <NBListItem button onPress={() => onPress(item)}>
      <Text style={stylesNB.item}>{item.name}</Text>
    </NBListItem>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
}

const stylesNB = {
  item: {
    color: '#616161',
    paddingTop: 7,
    paddingBottom: 7,
  },
}

export default ListItem
