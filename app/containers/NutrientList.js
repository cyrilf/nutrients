import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, Text, Card, CardItem, Button, View, H3, Body } from 'native-base'
import Modal from 'react-native-modal'

import NutrientListItem from 'components/list/NutrientListItem'

class NutrientList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      selectedItem: undefined,
    }

    this.setModalVisible = this.setModalVisible.bind(this)
    this.renderRow = this.renderRow.bind(this)
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
          dataArray={this.props.data}
          renderRow={this.renderRow} />
        <Modal
          animationIn="slideInRight"
          animationOut="slideOutRight"
          isVisible={modalVisible}
          hideOnBack={true}>
          {!selectedItem ?
            <View /> :
            <Card>
              <CardItem header>
                <H3>
                  {selectedItem.name}
                </H3>
              </CardItem>
              <CardItem>
                <Body>
                  { !!selectedItem.notes &&
                    <Text>
                      Note: <Text>{selectedItem.notes}</Text>
                    </Text>
                  }
                  { !!selectedItem.food &&
                    <List
                      dataArray={selectedItem.food}
                      renderRow={(food) => (<ListItem><Text key={food}>{food.trim()}</Text></ListItem>)}/>
                  }
                </Body>
              </CardItem>
              <CardItem footer>
                <Button rounded light onPress={() => this.setModalVisible(false, selectedItem)}>
                  <Text>Go Back</Text>
                </Button>
              </CardItem>
            </Card>
          }
        </Modal>
      </View>
    )
  }
}

NutrientList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default NutrientList
