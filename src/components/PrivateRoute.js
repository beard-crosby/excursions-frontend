import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { UserContext } from "../App"

const PrivateRoute = ({ ...props }) => {
    const { isLogged } = useContext(UserContext)

    if (isLogged) {
        return <Route {...props} />
    }

    return <Redirect to="/login" />
}

PrivateRoute.propTypes = {
    /** Passed for react-router-dom */
    exact: PropTypes.bool,
    /** Passed for react-router-dom */
    path: PropTypes.string.isRequired,
    /** Component that the route links to. Passed for react-router-dom */
    component: PropTypes.func,
}

PrivateRoute.defaultProps = {
    exact: true,
}

export default PrivateRoute
