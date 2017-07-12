import React from 'react'
import PropTypes from 'prop-types'
import { ListItem as NBListItem, Text, Icon } from 'native-base'

const ListItem = ({item, onPress}) => {
  let name
  if (typeof item === 'object') {
    name = item.name
  } else if (typeof item === 'string') {
    name = item
  }

  const onPressAction = () => onPress(item)
  const plantIcon = (item.priority && (<Icon name="sunny" style={{ color: '#00bfa5', fontSize: 12 }} />)) || null
  const listItemProps = { onPress: onPressAction }
  if (item.divider) {
    listItemProps.itemDivider = true
    listItemProps.onPress = () => {}
  }

  return (
    <NBListItem {...listItemProps}>
      <Text style={stylesNB.item}>{name} </Text>{plantIcon}
    </NBListItem>
  )
}

ListItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  onPress: PropTypes.func,
}

ListItem.defaultProps = {
  onPress: () => { console.warn('Missing ListItem.onPress prop') },
}

const stylesNB = {
  item: {
    color: '#616161',
    paddingTop: 7,
    paddingBottom: 7,
  },
}

export default ListItem
