import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'

import { List } from 'components/list'
import { findNutrientByName } from 'components/nutrients/NutrientsScreen'

class FoodDetailView extends React.Component {
  constructor(props) {
    super(props)

    this.openNutrientView = this.openNutrientView.bind(this)
  }

  openNutrientView(item) {
    if (typeof item === 'string') {
      item = findNutrientByName(item)
    }
    item && this.props.navigation.navigate('NutrientDetail', { item, name: item.name })
  }

  render () {
    const { goBack } = this.props.navigation
    const { item } = this.props.navigation.state.params

    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <ScrollView>
            { !!item.nutrients && (
              <View style={styles.cardContentNutrients}>
                <List data={item.nutrients} onItemPress={this.openNutrientView} />
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
