import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'

import { List } from 'components/list'

class NutrientDetailScreen extends React.Component {
  render () {
    const { goBack } = this.props.navigation
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
                <List data={item.food} />
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

NutrientDetailScreen.propTypes = {
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
  cardContentFoodText: {
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
  cardContentFood: {
    justifyContent: 'center',
  },
})

export default NutrientDetailScreen
