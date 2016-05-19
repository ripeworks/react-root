# React &lt;Root /&gt;

> Because I don't want to deal with boilerplates and starters.

[![npm version](https://badge.fury.io/js/react-root.svg)](https://badge.fury.io/js/react-root)

## Install

```
$ npm install --save react-root
```

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import { Root, createStore } from 'react-root'

const middleware = [
  // any redux middleware you need
]

const reducers = {
  // object of your reducers
}

const store = createStore(middleware, reducers)

const routes = <Route path='/' component={App}>
  <Route path='home' component={Home} />
</Route>

render(
  <Root routes={routes} store={store} />,
  document.getElementById('app')
)

```

See the [example](example) to see how easy it is to get started!

### Redux Devtools

Install the [Redux Devtools browser extension](https://github.com/zalmoxisus/redux-devtools-extension).

### Hot reloading your reducers

If you need to hot reload reducers in development, you can pass a function as the 4th parameter to `creatStore` in order to get the store instance so you can call `replaceReducer`. This function is only ever called if `module.hot === true`:

```js
const store = createStore(middleware, reducers, storeEnhancers, store => {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default)
  })
})
```


## What's inside?

* redux
* react-redux
* react-router
* react-router-redux

## Related Projects

* [superdevpack](https://github.com/ripeworks/superdevpack) Use react-root and superdevpack together for the quickest way to get started on a React project.
