import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                        © Signal {new Date().getFullYear()} | Travel Tracker
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
