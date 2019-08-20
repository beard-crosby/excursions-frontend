import React, { useState } from "react"
import Layout from "../../components/Layout"
import {
    Row,
    Col,
    Form,
    Button,
    Card,
    CardBody,
    FormGroup,
    Label,
    Input,
} from "reactstrap"
import { format } from "path"
import request from "./request"

const Home = () => {
    const [data, setData] = useState({})
    const [form, setForm] = useState({
        email: "",
        username: "",
        fullName: "",
        password: "",
        confirmPassword: "",
    })

    const updateField = e => {
        setForm({
            ...format,
            [e.target.name]: e.target.value,
        })
    }

    const handleRequest = e => {
        setData(request)
    }

    return (
        <Layout>
            <Row className="mt-5">
                <Col>
                    <h2 className="mt-0 mb-0">Welcome to</h2>
                    <h1 className="display-1 mb-3">Excursions</h1>
                    <h3 className="lead">
                        Create, plan, learn and go outdoors!
                    </h3>
                </Col>
                <Col>
                    <Row className="d-flex justify-content-center">
                        <Col col="12">
                            <h4>Get started by creating an account</h4>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center mt-3">
                        <Col col="12">
                            <Card
                                style={{
                                    background: "white",
                                    border: "none",
                                }}
                            >
                                <CardBody>
                                    <Form onSubmit={handleRequest}>
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input
                                                value={form.email}
                                                onChange={updateField}
                                                type="email"
                                                name="email"
                                                placeholder="me@me.me"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="username">Username</Label>
                                            <Input
                                                value={form.username}
                                                onChange={updateField}
                                                type="text"
                                                name="username"
                                                placeholder="me"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="full-name">Full Name</Label>
                                            <Input
                                                value={form.fullName}
                                                onChange={updateField}
                                                type="text"
                                                name="full-name"
                                                placeholder="Me Meington"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input
                                                value={form.password}
                                                onChange={updateField}
                                                type="password"
                                                name="full-name"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="confirm-password">Confirm Password</Label>
                                            <Input
                                                value={form.confirmPassword}
                                                onChange={updateField}
                                                type="password"
                                                name="confirm-password"
                                            />
                                        </FormGroup>
                                        <Row>
                                            <Col className="text-right">
                                                <Button
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Sign Up
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}

export default Home
