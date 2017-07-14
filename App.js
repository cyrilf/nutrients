import Expo from 'expo'
import React from 'react'
import { Provider } from 'react-redux'
import { StyleProvider } from 'native-base'

import AppNavigator from 'AppNavigator'
import createStore from 'store/store'

import getTheme from 'native-base-theme/components'
import commonColor from 'native-base-theme/variables/commonColor'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { isReady: false }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    })

    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }

    return (
      <Provider store={createStore()}>
        <StyleProvider style={getTheme(commonColor)}>
          <AppNavigator />
        </StyleProvider>
      </Provider>
    )
  }
}
