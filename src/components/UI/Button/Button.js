import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const FormBtn = props =>
  <Button
    variant={props.variant}
    color="default"
    type={props.type}
    disabled={props.disabled}
    onClick={props.onClick}>
    {props.children}
  </Button>

FormBtn.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.string
}

export default FormBtn