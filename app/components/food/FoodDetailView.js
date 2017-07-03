import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'

class FoodDetailView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.name,
  })

  render () {
    const { goBack } = this.props.navigation
    const { item } = this.props.navigation.state.params

    return (
      <View style={styles.card}>
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
          <Button full light onPress={() => goBack()}>
            <Text>Go Back</Text>
          </Button>
        </View>
      </View>
    )
  }
}

FoodDetailView.propTypes = {
  navigation: PropTypes.object,
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

export default FoodDetailView
