import React from "react"
import PropTypes from "prop-types"
import Layout from "../Layout"

const Error = ({ sidebar, message }) => {
    return (
        <Layout sidebar={sidebar}>
            <div
                style={{ height: "100%", flexDirection: "column" }}
                className="d-flex justify-content-center align-items-center"
            >
                <h1 className="text-danger">An Error Occured</h1>
                <h2>{message}</h2>
            </div>
        </Layout>
    )
}

Error.propTypes = {
    /** Boolean that decides if the sidebar will be present along with the error message. */
    sidebar: PropTypes.bool,
    /** The message that is returned from the API response error. */
    message: PropTypes.string,
}

Error.defaultProps = {
    sidebar: false,
    message: "An error has occured.",
}

export default Error
