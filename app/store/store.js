import { createStore, combineReducers } from 'redux'

import navigation from 'reducers/navigation'

const reducer = combineReducers({
  navigation,
})

export default () => createStore(reducer)
