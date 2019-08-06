import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'
// import Head from '../Head'

const Loading = ({ sidebar, fluid }) => {
    return (
        <Layout sidebar={sidebar} fluid={fluid}>
            {/* <Head title="Loading..." /> */}
            <div
                style={{ height: '100%' }}
                className="d-flex justify-content-center align-items-center">
                    <p>Loading...</p>
            </div>
        </Layout>
    )
}

Loading.propTypes = {
    /** Passed directly to the Layout component */
    sidebar: PropTypes.bool,
    /** Passed directly to the Layout component */
    fluid: PropTypes.bool,
}

Loading.defaultProps = {
    sidebar: false,
    fluid: false,
}

export default Loading
