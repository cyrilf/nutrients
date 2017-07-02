import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'native-base'
import Modal from 'react-native-modal'

import NutrientModalContent from './NutrientModalContent'

class NutrientModal extends Component {

  render() {
    const { selectedItem, onClose } = this.props

    return (
      <Modal
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={!!selectedItem}
        hideOnBack={true}>
        {!selectedItem ?
          <View /> :
          <NutrientModalContent item={selectedItem} onClose={onClose} />
        }
      </Modal>
    )
  }
}

NutrientModal.propTypes = {
  selectedItem: PropTypes.object,
  onClose: PropTypes.func,
}

export default NutrientModal
