import React from "react"
import PropTypes from "prop-types"
import { Container } from "reactstrap"

const Layout = ({ children }) => {
    return <Container>{children}</Container>
}

Layout.propTypes = {
    /** The children of the component */
    children: PropTypes.node.isRequired,
}

export default Layout
