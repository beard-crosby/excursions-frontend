import React from 'react'
import * as classes from './Form.module.scss'

const Form = props =>
  <form className={classes.Form} onSubmit={props.submit}>
    {props.children}
  </form>

export default Form