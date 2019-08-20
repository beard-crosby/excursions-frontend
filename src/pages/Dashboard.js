import React, { useContext } from "react"
import Layout from '../components/Layout'
import Spinner from "../components/UI/Spinner/Spinner"
import { UserContext  } from '../App'

const Dashboard = () => {
    const { user } = useContext(UserContext)

    return (
        <Layout>
            <h1>Dashboard</h1>
            <h2>{user.name}</h2>
        </Layout>
    )
}

export default Dashboard
