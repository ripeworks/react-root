import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router'

import Root from '../src/Root'

class Index extends Component {
  render() {
    return <div>
      <h1>Hello World!</h1>
    </div>
  }
}

const routes = <Route path='/' component={Index} />

render(
  <Root routes={routes} />,
  document.getElementById('app')
)
