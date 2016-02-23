import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

export default (middleware = [], reducers = {}, enhancers = [], hot = null) => {
  const reducer = combineReducers({...reducers, routing})
  const store = createStore(reducer, compose(
    applyMiddleware(...middleware),
    ...enhancers,
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ))

  if (module.hot && hot) {
    hot(store)
  }

  return store
}
