import React, { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        setLoading(true)
        axios
            .post(`${process.env.REACT_APP_BASE_API_ROUTE}/graphql`, {
                query: `
                mutation {
                    sign_up(userInput: {password: "asnrg34", userName: "mamamamfjfjfj"}) {
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

    return isLoading ? <p>Loading</p> : (
        <>
        <p>{data.userName}</p>
        </>
    )
}

export default Home
