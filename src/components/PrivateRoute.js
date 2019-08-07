import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = (props, { state }) => {
    if (state.token) { 
        return <Route {...props} />
    } else {
        return <Redirect to="/login" />
    }
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

export default connect(state => ({
    state: {
        token: state.token
    },
}))(PrivateRoute)
