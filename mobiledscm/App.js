import React from 'react'

import Navigator from './navigation/Navigator'
import user from './store/reducers/User'
import auth from './store/reducers/Auth'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  user,
  auth
})

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

export default App
