import React, { useState, useEffect } from "react"
import Router from './Router'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Spinner from './components/UI/Spinner/Spinner'

const UserContext = React.createContext()

function App() {
    const [isLoading, setLoading] = useState(false)
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'))

    const updateLogged = () => {
        setIsLogged(!!localStorage.getItem('token'))
    }

    useEffect(() => {
        if (isLogged) {
            setLoading(true)
            console.log("/users")
            setLoading(false)
        } else {
            console.log('Not Logged In')
        }
    }, [isLogged])

    return isLoading ? <Spinner /> : (
        <UserContext.Provider value={{ isLogged, updateLogged }}>
            <Nav />
            <div className="super-container">
                <Router />
            </div>
            <Footer />
        </UserContext.Provider>
    )
}

export default App

export { UserContext }
