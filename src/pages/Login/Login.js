import React, { useState, useContext } from "react"
import Layout from "../../components/Layout"
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
import { UserContext } from "../../App"
import axios from "axios"
import Error from '../../components/Error'

const Login = () => {
    const { updateLogged } = useContext(UserContext)
    const [error, setError] = useState()
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
        e.preventDefault()
        axios
            .post(process.env.REACT_APP_BASE_API_ROUTE, {
                query: `
                    query {
                        login(email: "${form.email}", password: "${form.password}") {
                            token
                        }
                    }
                `,
            })
            .then(res => {
                // console.log(res)
                if (res.data.errors) {
                    console.log(res.data.errors)
                    setError(res.data.errors)
                } else {
                    return res.data.data.login
                }
            })
            .then(obj => {
                localStorage.setItem("token", obj.token)
                updateLogged()
                setForm({ email: "", password: "" })
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
                    {error ? (
                        error.map((e, i) => (
                            <Error key={i}>{e.message}</Error>
                    ))
                    ) : null}
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
