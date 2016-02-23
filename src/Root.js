import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

let history, store

export default class Root extends Component {
  static propTypes = {
    routes : PropTypes.any.isRequired,
    store : PropTypes.any.isRequired,
    history : PropTypes.any,
    routeRender : PropTypes.func
  };

  static defaultProps = {
    middleware: [],
    reducers: {}
  };

  constructor(props) {
    super(props)

    if (props.history) {
      history = props.history
    } else {
      history = browserHistory
    }

    store = props.store
    history = syncHistoryWithStore(history, store)
  }

  render() {
    const {routes, routeRender} = this.props
    const routerProps = {history}
    if (routeRender) {
      routerProps.render = routeRender
    }

    return <Provider store={store}>
      <Router {...routerProps}>
        {routes}
      </Router>
    </Provider>
  }
}
