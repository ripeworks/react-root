import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router'

import { Root, createStore } from '../src/index'

class Index extends Component {
  render() {
    return <div>
      <h1>Hello World!</h1>
    </div>
  }
}

const store = createStore()

const routes = <Route path='/' component={Index} />

render(
  <Root routes={routes} store={store} />,
  document.getElementById('app')
)
