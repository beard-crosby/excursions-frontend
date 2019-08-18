import React, { useState, useContext } from "react"
import * as actionCreators from "../store/actions/actionCreators"
import { Container, Collapse, Navbar, NavbarToggler, Nav } from "reactstrap"
import { Link, NavLink } from "react-router-dom"
import { UserContext } from '../App'

const Navigation = () => {
    const { isLogged, updateLogged } = useContext(UserContext)

    const [isOpen, setOpen] = useState(false)

    const toggleOpen = () => setOpen(!isOpen)

    const handleLogout = () => {
        localStorage.removeItem('token')
        updateLogged()
    }

    return (
    <>
        <Navbar color="light" light expand="md">
            <Container>
                <Link to="/" className={`mono, nav-link`}>
                    <h5 className="m-0">Excursions</h5>
                </Link>
                <NavbarToggler onClick={toggleOpen} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {isLogged ? (
                        <>
                            <NavLink to="/" className="nav-link">
                                Dashboard
                            </NavLink>
                            <Link to="/" className="nav-link" onClick={() => handleLogout()}>
                                Log Out
                            </Link>
                        </>
                    ) : (
                        <NavLink to="/login" className="nav-link">
                            Login
                        </NavLink>
                    )}
                </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default Navigation
