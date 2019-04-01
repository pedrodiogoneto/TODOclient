import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker'

import indexRoutes from './routes/routes'

var hist = createBrowserHistory()

ReactDOM.render(
    <Router history={hist}>
      <Suspense fallback={"LOADING!!"}>
        <Switch>{indexRoutes.map((prop, key) => <Route exact={prop.exact} path={prop.path} key={key} component={prop.component} />)}</Switch>
      </Suspense>
    </Router>
  , document.getElementById('root'))

serviceWorker.unregister()
