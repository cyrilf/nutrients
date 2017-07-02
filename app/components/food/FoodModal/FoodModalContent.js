import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Text, Button, H3 } from 'native-base'

const FoodModalContent = ({ item, onClose }) => {

  return (
    <View style={styles.card}>
      <View>
        <H3 style={stylesNB.cardHeaderTitle}>{item.name}</H3>
      </View>
      <View style={styles.cardContent}>
        <ScrollView>
          { !!item.nutrients && (
            <View style={styles.cardContentNutrients}>
              <ScrollView>
                { item.nutrients.map((nutrient) => <Text key={nutrient} style={stylesNB.cardContentNutrientsText}>{nutrient.trim()}</Text>) }
              </ScrollView>
            </View>
          )}
        </ScrollView>
      </View>
      <View>
        <Button full light onPress={onClose}>
          <Text>Go Back</Text>
        </Button>
      </View>
    </View>
  )
}

FoodModalContent.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

// native-base doesn't support StyleSheet atm..
const stylesNB = {
  cardHeaderTitle: {
    padding: 20,
    textAlign: 'center',
  },
  cardContentNoteText: {
    textAlign: 'center',
    color: 'grey',
    paddingBottom: 20,
  },
  cardContentNutrientsText: {
    textAlign: 'center',
  },
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flex: 1,
  },
  cardContent: {
    alignSelf: 'stretch',
    padding: 20,
    flex: 1,
  },
  cardContentNutrients: {
    justifyContent: 'center',
  },
})

export default FoodModalContent
