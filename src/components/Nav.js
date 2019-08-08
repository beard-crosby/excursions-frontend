import React, { useState, useContext } from "react"
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap"
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from "../App"

const Navigation = () => {
    const [isOpen, setOpen] = useState(false)
    const { isLogged, updateLogged } = useContext(UserContext)

    const toggleOpen = () => {
        setOpen(!isOpen)
    }

    const handleLogout = () => {
        console.log('Logging Out')
        localStorage.removeItem('token')
        updateLogged()
    }

    // Temporary Login During Development
    const tempLogin = () => {
        localStorage.setItem('token', '12345')
        updateLogged()
    }

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Container>
                    <Link to="/" className={`mono nav-link`}><h5 className="m-0">Excursions</h5></Link>
                    <NavbarToggler onClick={toggleOpen} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {isLogged ? <LoggedMenu handleLogout={handleLogout} /> : <NotLoggedMenu tempLogin={tempLogin} />}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation

const LoggedMenu = ({ handleLogout }) => (
    <>
        <NavItem>
            <NavLink to="/" className="nav-link">Dashboard</NavLink>
        </NavItem>
        <NavItem>
            <Link to="#" className="nav-link" onClick={() => handleLogout()}>Log Out</Link>
        </NavItem>
    </>
)

const NotLoggedMenu = ({ tempLogin }) => (
    <>
        <NavItem>
            <NavLink to="/" className="nav-link" onClick={() => tempLogin()}>Log In</NavLink>
        </NavItem>
    </>
)
