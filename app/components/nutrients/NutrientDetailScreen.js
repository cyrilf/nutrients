import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'

import { List } from 'components/list'
import { findFoodByName } from 'components/food/FoodScreen'

class NutrientDetailScreen extends React.Component {
  constructor(props) {
    super(props)

    this.openNutrientsHome = this.openNutrientsHome.bind(this)
    this.openFoodView = this.openFoodView.bind(this)
  }

  openNutrientsHome() {
    this.props.navigation.navigate('Nutrients', {})
  }

  openFoodView(item) {
    if (typeof item === 'string') {
      item = findFoodByName(item)
    }

    item && this.props.navigation.navigate('FoodDetail', { item, name: item.name })
  }

  render () {
    const { item } = this.props.navigation.state.params

    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <ScrollView>
            { !!item.notes &&
              <View>
                <Text style={stylesNB.cardContentNoteText}>{item.notes}</Text>
              </View>
            }
            { !!item.food && (
              <View style={styles.cardContentFood}>
                <List data={item.food} onItemPress={this.openFoodView} />
              </View>
            )}
          </ScrollView>
        </View>
        <View>
          <Button full light onPress={this.openNutrientsHome}>
            <Text>Close</Text>
          </Button>
        </View>
      </View>
    )
  }
}

NutrientDetailScreen.propTypes = {
  navigation: PropTypes.object,
}

// native-base doesn't support StyleSheet atm..
const stylesNB = {
  cardContentNoteText: {
    textAlign: 'center',
    color: 'grey',
    paddingBottom: 20,
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
  cardContentFood: {
    justifyContent: 'center',
  },
})

export default NutrientDetailScreen
