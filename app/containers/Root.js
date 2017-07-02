import React, { Component } from 'react'
import { Container, Content, StyleProvider } from 'native-base'

import getTheme from 'native-base-theme/components'
import commonColor from 'native-base-theme/variables/commonColor'
import Header from 'components/anatomy/Header'
import Footer from 'components/anatomy/Footer'
import Home from './Home'

export default class Root extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header />
          <Content>
            <Home/>
          </Content>
          <Footer visible={false} />
        </Container>
      </StyleProvider>
    )
  }
}
