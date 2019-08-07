import React, { useState, useContext } from "react"
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap"
import { Link } from 'react-router-dom'
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
                    <NavbarBrand href="/" className="mono">
                        Excursions
                    </NavbarBrand>
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
            <Link className="nav-link" to="/">Dashboard</Link>
        </NavItem>
        <NavItem>
            <NavLink onClick={() => handleLogout()} href="#">Log Out</NavLink>
        </NavItem>
    </>
)

const NotLoggedMenu = ({ tempLogin }) => (
    <>
        <NavItem>
            <NavLink onClick={() => tempLogin()} href="#">Log In</NavLink>
        </NavItem>
    </>
)
