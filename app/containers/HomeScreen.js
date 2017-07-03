import React from 'react'
import PropTypes from 'prop-types'

import NutrientsView from 'components/nutrients'
import Skeleton from 'components/anatomy/Skeleton'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Nutrients',
    headerTintColor: 'green',
  }

  render() {
    return (
      <Skeleton>
        <NutrientsView navigation={this.props.navigation}/>
      </Skeleton>
    )
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
}

export default HomeScreen
