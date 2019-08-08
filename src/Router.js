import React, { useContext } from "react"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import { UserContext } from "./App"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/error/NotFound"

const Router = () => {
    const { isLogged } = useContext(UserContext)

    return (
        <Switch>
            {isLogged ? (
                <PrivateRoute exact path="/" component={Dashboard} />
            ) : (
                <Route exact path="/" component={Home} />
            )}
            <Route component={NotFound} /> */}
        </Switch>
    )
}

export default Router
