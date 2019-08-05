import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/error/NotFound'


const Router = () => (
    <Switch>
        {/* <PrivateRoute path="/" component={Profile} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />

        <Route component={NotFound} /> */}
    </Switch>
)

export default Router
