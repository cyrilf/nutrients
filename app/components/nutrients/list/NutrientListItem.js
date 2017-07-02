import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, Text } from 'native-base'

const NutrientListItem = ({item, onPress}) => {
  return (
    <ListItem button onPress={() => onPress(true, item)}>
      <Text>{item.name}</Text>
    </ListItem>
  )
}

NutrientListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
}

export default NutrientListItem
