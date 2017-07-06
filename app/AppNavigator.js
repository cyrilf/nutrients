import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RootContainer from 'containers/RootContainer'

export class AppNavigator extends Component {
  render() {
    const { dispatch, navigation } = this.props

    return <RootContainer navigation={addNavigationHelpers({ dispatch, state: navigation })} />
  }
}

AppNavigator.propTypes = {
  dispatch: PropTypes.func,
  navigation: PropTypes.object,
}

export const mapStateToProps = ({ navigation }) => ({ navigation })
export default connect(mapStateToProps)(AppNavigator)
