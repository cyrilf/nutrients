import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, Text } from 'native-base'

class NutrientList extends Component {
  render() {
    return (
      <List dataArray={this.props.data}
        renderRow={(item) =>
          <ListItem>
            <Text>{item.name}</Text>
          </ListItem>
        }
        button={true}/>
    )
  }
}

NutrientList.propTypes = {
  data: PropTypes.array.isRequired
}

export default NutrientList
