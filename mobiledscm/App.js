import React from 'react'

import Navigator from './navigation/Navigator'
import user from './store/reducers/User'
import auth from './store/reducers/Auth'
import users from './store/reducers/Users'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
  user,
  auth,
  users
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

export default App
