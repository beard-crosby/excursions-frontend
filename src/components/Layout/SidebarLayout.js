import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'
import Sidebar from '../Sidebar'

const Layout = ({ sidebar, children }) => {
    const sidebarHTML = (
        <Col md="3" lg="2" className="sidebar pb-3">
            <Sidebar />
        </Col>
    )

    return (
        <Container fluid>
            <Row>
                {sidebar ? sidebarHTML : null}
                <Col md={sidebar ? '9' : '12'} lg={sidebar ? '10' : '12'} className="pt-3 pb-3 pl-3 pr-3">
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default Layout

Layout.propTypes = {
    /** Determines wether the sidebar is rendered. */
    sidebar: PropTypes.bool,
    /** The children of the component */
    children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
    sidebar: false,
}
