import React from 'react'
import PropTypes from 'prop-types'
import { ListItem as NBListItem, Text } from 'native-base'

const ListItem = ({item, onPress}) => {
  const name = typeof item === 'string' ? item : item.name

  return (
    <NBListItem button onPress={() => onPress && onPress(item)}>
      <Text style={stylesNB.item}>{name}</Text>
    </NBListItem>
  )
}

ListItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
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
