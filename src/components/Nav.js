import React from "react"
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav
} from "reactstrap"
import { Link, NavLink } from 'react-router-dom'

const Navigation = ({ state, dispatch }) => 
    <>
        <Navbar color="light" light expand="md">
            <Container>
                <Link to="/" className={`mono, nav-link`}><h5>Excursions</h5></Link>
                <NavbarToggler onClick={dispatch} />
                <Collapse isOpen={dispatch} navbar>
                    <Nav className="ml-auto" navbar>
                    {//state.token ?
                        <>
                            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                            <Link to="/" className="nav-link">Log Out</Link>
                        </>
                        // :
                        // <NavLink to="/dashboard" className="nav-link">Log In</NavLink>
                    }
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </>

export default Navigation