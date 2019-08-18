import React, { useContext } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import { UserContext } from "./App"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/error/NotFound"
import Login from "./pages/Login"

const Router = () => {
    const { isLogged } = useContext(UserContext)
    return (
        <Switch>
            {isLogged ? (
                <>
                    <Redirect from="/login" to="/" />
                    <PrivateRoute exact path="/" component={Dashboard} />
                </>
            ) : (
                <>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                </>
            )}
            <Route component={NotFound} />
        </Switch>
    )
}

export default Router
