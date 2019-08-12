import React from 'react'
import * as classes from './Spinner.module.scss'

const Spinner = () => 
  <div className={classes.skFoldingCube}>
    <div className={`${classes.skCube1} ${classes.skCube}`}></div>
    <div className={`${classes.skCube2} ${classes.skCube}`}></div>
    <div className={`${classes.skCube4} ${classes.skCube}`}></div>
    <div className={`${classes.skCube3} ${classes.skCube}`}></div>
  </div>
export default Spinner

