import React, { useState, useEffect } from 'react'
import axios from "axios"
import Layout from '../components/Layout/Layout'
import Spinner from '../components/UI/Spinner/Spinner'

const Dashboard = () => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        setLoading(true)
        axios
            .post(`${process.env.REACT_APP_BASE_API_ROUTE}/graphql`, {
                query: `
                mutation {
                    sign_up(userInput: {email: "samisgay", password: "asnrg34", userName: "mamamamfjfjfj"}) {
                    userName
                    token
                    tokenExpiry
                }
            }
            `,
            })
            .then(res => {
                console.log(res)
                return res.data.data.sign_up
            })
            .then(json => {
                setData(json)
                console.log(json.token)
            })
            setLoading(false)
    }, [])

    return isLoading ? <Spinner /> : (
        <Layout sidebar>
            <h1>Dashboard</h1>
            <p>{data.useName}</p>
        </Layout>
    )
}

export default Dashboard
