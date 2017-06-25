import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'native-base'
import Modal from 'react-native-modal'

import NutrientModalContent from './NutrientModalContent'

class NutrientModal extends Component {

  render() {
    const { isVisible, selectedItem, onClose } = this.props

    return (
      <Modal
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={isVisible}
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
  isVisible: PropTypes.bool.isRequired,
  selectedItem: PropTypes.object,
  onClose: PropTypes.func,
}

export default NutrientModal
