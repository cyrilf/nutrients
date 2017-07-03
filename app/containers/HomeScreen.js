import React from 'react'

import NutrientsView from 'components/nutrients'
import Skeleton from 'components/anatomy/Skeleton'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Nutrients',
    headerTintColor: 'green',
  }

  render() {
    // const { navigate } = this.props.navigation

    return (
      <Skeleton>
        <NutrientsView/>
      </Skeleton>
    )
  }
}

export default HomeScreen
