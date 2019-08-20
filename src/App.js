import React, { useState, useEffect } from "react"
import Router from './Router'
import Nav from './components/Nav'
import Footer from './components/Footer'
import axios from 'axios';
import jwt from 'jsonwebtoken'

const UserContext = React.createContext()

const App = props => {
    const [isLoading, setLoading] = useState(false)
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'))
    const [user, setUser] = useState({})

    const updateLogged = () => {
        setIsLogged(!!localStorage.getItem('token'))
    }

    const getUserId = () => {
        if (isLogged) {
            const token = localStorage.getItem('token')
            const decode = jwt.decode(token)
            return decode.id
        }
    }

    useEffect(() => {
        getUserId()
        console.log("Fetching User Data")
        if (isLogged) {
            setLoading(true)
            axios.post(process.env.REACT_APP_BASE_API_ROUTE, {
                variables: {
                    id: getUserId(),
                    token: localStorage.getItem('token')
                },
                query: `
                    query {
                        getUser(_id: "${getUserId()}", token: "${localStorage.getItem('token')}") {
                            username
                            name
                            email
                        }
                    }
                `
            })
            .then(res => {
                console.log(res)
                return res.data.errors ? 'error' : res.data.data.getUser
            })
            .then(json => {
                setUser(json)
                setLoading(false)
            })
        } else {
            console.log('Not Logged In')
        }
    }, [isLogged])

    return (
    <UserContext.Provider value={{ user, setUser, isLogged, updateLogged }}>
        <Nav />
        <Router />
        <Footer />
    </UserContext.Provider>)}

export default App

export { UserContext }
