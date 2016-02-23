import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { routerReducer as routing, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

export default (middleware = [], reducers = {}, enhancers = [], hot = null) => {
  const reducer = combineReducers({...reducers, routing})
  const store = createStore(reducer, compose(
    applyMiddleware(...middleware, routerMiddleware(browserHistory)),
    ...enhancers,
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ))

  if (module.hot && hot) {
    hot(store)
  }

  return store
}
