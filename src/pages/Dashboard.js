import React from "react"
import { connect } from "react-redux"
import Layout from '../components/Layout'
import Spinner from "../components/UI/Spinner/Spinner"

const Dashboard = ({ state, dispatch }) => {
    return (
        <Layout>
            {state.loading ? <Spinner /> : <h1>Dashboard</h1>}
        </Layout>
    )
}

export default connect(state => ({
    state: {
        loading: state.loading,
    },
}))(Dashboard)
