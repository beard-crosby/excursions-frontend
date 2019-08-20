import React, { useState } from "react"
import PropTypes from "prop-types"
import { Alert } from 'reactstrap'

const Error = ({ children }) => {
    const [isOpen, setOpen] = useState(true)

    return (
        <Alert color="danger" isOpen={isOpen} toggle={() => {setOpen(false)}}>
            {children}
        </Alert>
    )
}

Error.propTypes = {
    /** The message that is returned from the API response error. */
    message: PropTypes.string,
}

Error.defaultProps = {
    message: "An error has occurred.",
}

export default Error

// TO DO
// This component doesn't unmount when it is closed. What other way can we do this?
