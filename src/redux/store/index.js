import thunk from 'redux-thunk'

import * as reducers from 'redux/modules'

import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux'

/**
 * Added middeware that injects
 * between actions and reducers
 * @type {Array}
 */

const middleware = [
  thunk
]

/**
 * This enables us to use the
 * react-native-debugger app
 * in order to view the Redux store
 * @type {Function}
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/**
 * Combine all reducers for the root reducer
 */

const rootReducer = combineReducers(reducers)

/**
 * Main Store of Redux
 * @type {Object}
 */

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

export default store
