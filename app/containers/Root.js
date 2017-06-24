import React, { Component } from 'react'
import { Container, Content } from 'native-base'

import Header from 'components/anatomy/Header'
import Footer from 'components/anatomy/Footer'
import NutrientList from './NutrientList'

// Rename 'ressources/data/nutrients.sample.json' file to 'ressources/data/nutrients.json'
import nutrientsData from 'ressources/data/nutrients.json'

export default class Root extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <NutrientList data={nutrientsData.nutrients}/>
        </Content>
        <Footer visible={false} />
      </Container>
    )
  }
}
