import RootContainer from 'containers/RootContainer'

// const initialState = RootContainer.router.getStateForAction(RootContainer.router.getActionForPathAndParams('Home'))

export default (state, action) => {
  const nextState = RootContainer.router.getStateForAction(action, state)
  return nextState || state
}
