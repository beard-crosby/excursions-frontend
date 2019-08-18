import React, { useState, useEffect } from "react"
import Router from './Router'
import Nav from './components/Nav'
import Footer from './components/Footer'
import axios from 'axios';

const UserContext = React.createContext()

const App = props => {
    const [isLoading, setLoading] = useState(false)
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'))
    const [user, setUser] = useState({})

    const updateLogged = () => {
        setIsLogged(!!localStorage.getItem('token'))
    }

    useEffect(() => {
        console.log("Fetching User Data")
        if (isLogged) {
            setLoading(true)
            axios.post(process.env.REACT_APP_BASE_API_ROUTE, {
                variables: {
                    token: localStorage.getItem('token')
                },
                query: `
                    query UserData($token: String!) {
                        token(token: $token) {
                            username
                        }
                    }
                `
            }).then(res => res.data.errors ? 'error' : res)
            .then(json => {
                setUser(JSON.parse(json))
                setLoading(false)
            })
        } else {
            console.log('Not Logged In')
        }
    }, [isLogged])

    return (
    <UserContext.Provider value={{ user, isLogged, updateLogged }}>
        <Nav />
        <Router />
        <Footer />
    </UserContext.Provider>)}

export default App

export { UserContext }
