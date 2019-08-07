import React from "react"
import Nav from "../Nav"
import Footer from "../Footer"
import { Container } from "reactstrap"

const Layout = ({ children }) => (
    <>
        <Nav />
        <Container className="pt-5">{children}</Container>
        <Footer />
    </>
)

export default Layout
