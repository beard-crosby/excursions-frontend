import React, { useContext } from "react"
import Layout from "../components/Layout"
import { UserContext } from "../App"
import Spinner from "../components/UI/Spinner"

const Dashboard = () => {
    const { user, isLoading } = useContext(UserContext)

    return isLoading ? (
        <Spinner />
    ) : (
        <Layout>
            <h1>Dashboard</h1>
            <h2>{user.name}</h2>
        </Layout>
    )
}

export default Dashboard
