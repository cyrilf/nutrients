import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

// Rename '../../ressources/data/nutrients.sample.json' file to '../../ressources/data/nutrients.json'
import nutrientsData from '../../ressources/data/nutrients.json'

export default class NutrientList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={nutrientsData.nutrients}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
          keyExtractor={(item, index) => item.name}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: '#dbf1ca',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
