import React from "react"
import { connect } from "react-redux"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/error/NotFound"

const Router = ({ state }) => 
    <Switch>
        {state.token ? 
            <PrivateRoute exact path="/" component={Dashboard} />  
            :
            <Route exact path="/" component={Home} /> 
        }
        
        <Route component={NotFound} />
    </Switch>

export default connect(state => ({
    state: {
        token: state.token
    },
}))(Router)