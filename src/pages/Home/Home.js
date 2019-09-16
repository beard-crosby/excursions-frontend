import React, { useState, useContext } from "react"
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
import axios from "axios"
import { UserContext } from '../../App';

const Home = () => {
    const { user, setUser, updateLogged } = useContext(UserContext)
    const [form, setForm] = useState({
        email: "",
        username: "",
        name: "",
        password: "",
        confirm: "",
    })

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(form)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('SUBMITTING HOME FORM')
        axios
        .post(process.env.REACT_APP_BASE_API_ROUTE, {
            variables: {
                email: form.email,
                username: form.username,
                name: form.name,
                password: form.password,
                confirm: form.confirm
            },
            query: `
            mutation {
                createUser(userInput: {email: $email, username: $username, name: $name, password: $password, confirm: $confirm}) {
                    _id
                    username
                    name
                    email
                    token
                }
            }
        `,
        })
        .then(res => {
            if (res.data.errors) {
                console.log(res.data.errors)
            } else {
                return res.data.data.createUser
            }
        })
        .then(obj => {
            localStorage.setItem("token", obj.token)
            updateLogged()
            setForm({})
        })
    }

    return (
        <Layout>
            <Row className="mt-5">
                <Col col="12" sm="6" md="7">
                    <h2 className="mt-0 mb-0">Welcome to</h2>
                    <h1 className="display-1 mb-3">Excursions</h1>
                    <h3 className="lead">
                        Create, plan, learn and go outdoors!
                    </h3>
                </Col>
                <Col col="12" sm="6" md="5">
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
                                    <Form onSubmit={handleSubmit}>
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
                                            <Label for="name">Name</Label>
                                            <Input
                                                value={form.name}
                                                onChange={updateField}
                                                type="text"
                                                name="name"
                                                placeholder="Me Meington"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input
                                                value={form.password}
                                                onChange={updateField}
                                                type="password"
                                                name="password"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="confirm">Confirm Password</Label>
                                            <Input
                                                value={form.confirm}
                                                onChange={updateField}
                                                type="password"
                                                name="confirm"
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
