import React from 'react'
import PropTypes from "prop-types"
import { Container, Row, Col } from "reactstrap"
import Sidebar from "../Sidebar"

const Layout = ({ sidebar, fluid, children }) => {
    return sidebar ? (
        <Container fluid={fluid}>
            <Row>
                <Col md="3" lg="2" className="sidebar py-3">
                    <Sidebar />
                </Col>
                <Col md="9" lg="10" className="p-3">
                    {children}
                </Col>
            </Row>
        </Container>
    ) : (
        <Container fluid={fluid}>
            {children}
        </Container>
    )
}

Layout.propTypes = {
    /** Determines whether the sidebar in rendered. */
    sidebar: PropTypes.bool,
    /** If true, the container will be fluid. */
    fluid: PropTypes.bool,
    /** Children of the component */
    children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
    sidebar: false,
    fluid: false,
}

export default Layout