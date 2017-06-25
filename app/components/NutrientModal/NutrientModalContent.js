import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, Text, Card, CardItem, Button, H3, Body } from 'native-base'

const NutrientModalContent = ({ item, onClose }) => {

  return (
    <Card>
      <CardItem header>
        <H3>
          {item.name}
        </H3>
      </CardItem>
      <CardItem>
        <Body>
          { !!item.notes &&
            <Text>
              Note: <Text>{item.notes}</Text>
            </Text>
          }
          { !!item.food &&
            <List
              dataArray={item.food}
              renderRow={(food) => (<ListItem><Text key={food}>{food.trim()}</Text></ListItem>)}/>
          }
        </Body>
      </CardItem>
      <CardItem footer>
        <Button rounded light onPress={onClose}>
          <Text>Go Back</Text>
        </Button>
      </CardItem>
    </Card>
  )
}


NutrientModalContent.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default NutrientModalContent
