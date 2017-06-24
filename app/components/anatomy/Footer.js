import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { Footer as FooterBase, FooterTab, Button } from 'native-base'

class Footer extends Component {
  render() {
    return (
      this.props.visible ?
        <FooterBase>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </FooterBase>
      : null
    )
  }
}

Footer.defaultProps = {
  visible: true,
}

Footer.propTypes = {
  visible: PropTypes.bool,
}

export default Footer
