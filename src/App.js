import React, { useState, useEffect } from "react"
import Router from "./Router"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import axios from "axios"
import jwt from "jsonwebtoken"

const UserContext = React.createContext()

const App = props => {
    const [isLoading, setLoading] = useState(false)
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"))
    const [user, setUser] = useState({})

    const updateLogged = () => {
        setIsLogged(!!localStorage.getItem("token"))
    }

    const updateUser = u => {
        setUser(u)
    }

    useEffect(() => {
        if (isLogged) {
            setLoading(true)

            const getUserId = () => {
                const token = localStorage.getItem("token")
                const decode = jwt.decode(token)
                return decode.id
            }

            axios
                .post(process.env.REACT_APP_BASE_API_ROUTE, {
                    variables: {
                        id: getUserId(),
                        token: localStorage.getItem("token"),
                    },
                    query: `
                    query {
                        getUser(_id: $id, token: $token) {
                            username
                            name
                            email
                        }
                    }
                `,
                })
                .then(res => {
                    return res.data.errors ? "error" : res.data.data.getUser
                })
                .then(json => {
                    setUser(json)
                    setLoading(false)
                })
        } else {
            console.log("Not Logged In")
        }
    }, [isLogged])

    return (
        <UserContext.Provider
            value={{ isLoading, user, updateUser, isLogged, updateLogged }}
        >
            <Nav />
            <Router />
            <Footer />
        </UserContext.Provider>
    )
}

export default App

export { UserContext }
