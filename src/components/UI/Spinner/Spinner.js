import React from 'react'
import * as classes from './Spinner.module.scss'
import Layout from '../../Layout/Layout'

const Spinner = () => 
    <Layout>
        <div className={classes.loader}>Loading...</div>
    </Layout>

export default Spinner

