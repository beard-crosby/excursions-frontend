import React from "react"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/error/NotFound"

const Router = props => 
    <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} /> 
        <Route component={NotFound} />
    </Switch>

export default Router
