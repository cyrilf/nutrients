import React, { Component } from 'react'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

export default class HeaderExample extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Nutrients</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
