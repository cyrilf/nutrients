import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Content, StyleProvider } from 'native-base'

import getTheme from 'native-base-theme/components'
import commonColor from 'native-base-theme/variables/commonColor'
// import Header from './Header'
import Footer from './Footer'

class Skeleton extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          {/* <Header /> */}
          <Content>
            { this.props.children }
          </Content>
          <Footer visible={false} />
        </Container>
      </StyleProvider>
    )
  }
}

Skeleton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Skeleton
