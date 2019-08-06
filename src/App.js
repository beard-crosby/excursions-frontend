import React, { useState } from "react"
import Router from './Router'
import Nav from './components/Nav'
import Footer from './components/Footer'

const UserContext = React.createContext()

function App() {
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'))

    const updateLogged = () => {
        setIsLogged(!!localStorage.getItem('token'))
    }

    return (
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
