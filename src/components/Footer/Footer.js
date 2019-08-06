import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
    return (
        <footer className="bg-dark py-5 mt-5 text-light">
            <Container>
                <Row>
                    <Col className="text-center">
                        © Beard&nbsp;&amp;&nbsp;Crosby {new Date().getFullYear()} | Excursions
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
