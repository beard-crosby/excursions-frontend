import React, { useState, useContext } from "react"
// import "../scss/base.scss"
import { withRouter, Redirect } from "react-router-dom"
import Layout from "../../components/Layout"
import Spinner from "../../components/UI/Spinner"
import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
} from "reactstrap"
import request from "./request"
import { UserContext } from "../../App"
import axios from "axios"

const Login = () => {
    const { isLogged, updateLogged } = useContext(UserContext)
    const [data, setData] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleRequest = e => {
        console.log(`API_ROUTE: ${process.env.REACT_APP_BASE_API_ROUTE}`)
        e.preventDefault()
        axios
            .post(process.env.REACT_APP_BASE_API_ROUTE, {
                variables: {
                    email: form.email,
                    password: form.password,
                },
                query: `
                    query Login($email: String!, $password: String!) {
                        login(email: $email, password: $password) {
                            token
                            tokenExpiry
                        }
                    }
                `,
            })
            .then(res => {
                console.log(res.data.data.login)
                return res.data.data.login
            })
            .then(obj => {
                console.log(obj)
                localStorage.setItem("token", obj.token)
                updateLogged()
                setForm({ email: '', password: ''})
            })

    }

    // if (isLogged) {
    //     updateLogged()
    //     return <Redirect to="/" />
    // }

    return (
        <Layout>
            <Row className="justify-content-center mt-5">
                <Col md="4">
                    <Card
                        style={{
                            background: "white",
                            border: "none",
                        }}
                    >
                        <CardBody>
                            <Form onSubmit={handleRequest}>
                                <h4>Log In</h4>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        value={form.email}
                                        onChange={updateField}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="me@me.me"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input
                                        value={form.password}
                                        onChange={updateField}
                                        type="password"
                                        name="password"
                                        id="password"
                                    />
                                </FormGroup>
                                <Row>
                                    <Col>
                                        <Button color="primary" type="submit">
                                            Login
                                        </Button>
                                    </Col>
                                    {/* TO DO */}
                                    {/* <Col className="text-right">
                                    <Link to="/reset-password">Forgot your password?</Link>
                                </Col> */}
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}

export default Login
