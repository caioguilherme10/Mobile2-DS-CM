import React from 'react'

import Navigator from './navigation/Navigator'
import UserReducer from './store/reducers/User'
import AuthReducer from './store/reducers/Auth'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  user: UserReducer,
  auth: AuthReducer
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
