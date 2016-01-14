import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import { routeReducer as routing } from 'redux-simple-router'
import { combineReducers } from 'redux'
import createStore from './createStore'

const history = createHistory()
let store, reducer

export default class Root extends Component {
  static propTypes = {
    routes : PropTypes.any.isRequired,
    middleware : PropTypes.array,
    reducers : PropTypes.object
  };

  static defaultProps = {
    middleware: [],
    reducers: {}
  };

  constructor(props) {
    super(props)

    const {middleware, reducers} = props
    reducer = combineReducers({...reducers, routing})
    store = createStore(middleware, reducer)
    syncReduxAndRouter(history, store)
  }

  render() {
    const {routes} = this.props

    return <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  }
}
