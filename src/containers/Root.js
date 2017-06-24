import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import NutrientList from './NutrientList'

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NutrientList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbf1ca',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
