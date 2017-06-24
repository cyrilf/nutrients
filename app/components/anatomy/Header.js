import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header as HeaderBase, Left, Body, Right, Button, Icon, Title } from 'native-base'

class Header extends Component {
  render() {
    return (
      this.props.visible ?
        <HeaderBase>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Nutrients</Title>
          </Body>
          <Right />
        </HeaderBase>
      : null
    )
  }
}

Header.defaultProps = {
  visible: true,
}

Header.propTypes = {
  visible: PropTypes.bool,
}

export default Header
