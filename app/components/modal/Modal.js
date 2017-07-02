import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RNModal from 'react-native-modal'

class Modal extends Component {

  render() {
    const { selectedItem, children } = this.props
    const isVisible = !!selectedItem

    return (
      <RNModal
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={isVisible}
        hideOnBack={true}>
        {
          isVisible
            ? React.cloneElement(children, { ...this.props })
            : null
        }
      </RNModal>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  selectedItem: PropTypes.object,
  onClose: PropTypes.func,
}

export default Modal
