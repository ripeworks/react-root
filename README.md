# React &lt;Root /&gt;

> Because I don't want to deal with boilerplates and starters.

## Install

```
$ npm install --save react-root
```

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import { Root } from 'react-root'

const middleware = [
  // any redux middleware you need
]

const reducers = {
  // object of your reducers
}

const routes = <Route path='/' component={App}>
  <Route path='home' component={Home} />
</Route>

render(
  <Root routes={routes} reducers={reducers} middleware={middleware} />,
  document.getElementById('app')
)

```

## What's inside?

* redux
* react-router
* redux-simple-router
* redux-devtools

## Related Projects

* [superdevpack](https://github.com/ripeworks/superdevpack) Use react-root and superdevpack together for the quickest way to get started on a React project.
