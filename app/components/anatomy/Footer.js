import React, { Component } from 'react'
import { Text } from 'react-native'
import { Footer, FooterTab, Button } from 'native-base'

export default class HeaderExample extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
