import { createStore, compose, applyMiddleware } from 'redux'

export default (middleware, reducer) => {
  const finalMiddleware = [applyMiddleware(...middleware)]
  const finalCreateStore = compose(...finalMiddleware)(createStore)

  const store = finalCreateStore(reducer)

  // fixme - support module.hot

  return store
}
