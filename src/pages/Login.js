import React from "react"
import "../scss/base.scss"
import { connect } from "react-redux"
import * as actionCreators from "../store/actions/actionCreators"
import { withRouter, Redirect } from "react-router-dom"
import Layout from "../components/Layout"
import Spinner from "../components/UI/Spinner"
import Input from "../components/UI/Input"
import { Row, Col, Form, Button, Card, CardBody } from "reactstrap"

const Home = ({ state, dispatch, location }) => {
    const onLogin = event => {
        event.preventDefault()
        const userData = {
            email: state.loginForm.email.value,
            password: state.loginForm.password.value,
        }
        dispatch(actionCreators.login(userData))
    }

    return (
        <Layout>
            {state.loading ? (
                <Spinner />
            ) : (
                <Row className="d-flex justify-content-center">
                    <Col col="12" sm="6">
                        <Row className="mt-5 mb-3">
                            <Col>
                                <h2>Login</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card
                                    style={{
                                        background: "white",
                                        border: "none",
                                    }}
                                >
                                    <CardBody>
                                        <Form
                                            className="form"
                                            onSubmit={event => onLogin(event)}
                                        >
                                            {Object.entries(
                                                state.loginForm
                                            ).map(input => (
                                                <Input
                                                    key={input[0]}
                                                    elementType={
                                                        input[1].elementType
                                                    }
                                                    name={input[1].name}
                                                    invalidName={
                                                        input[1].invalidName
                                                    }
                                                    placeholder={
                                                        input[1].placeholder
                                                    }
                                                    invalid={!input[1].valid}
                                                    validation={
                                                        input[1].validation
                                                    }
                                                    touched={input[1].touched}
                                                    focusChanged={
                                                        input[1].focusChanged
                                                    }
                                                    value={input[1].value}
                                                    changed={event =>
                                                        dispatch(
                                                            actionCreators.inputChange(
                                                                event,
                                                                input[0],
                                                                location.pathname
                                                            )
                                                        )
                                                    }
                                                />
                                            ))}
                                            <Row>
                                                <Col className="text-right">
                                                    <Button
                                                        color="primary"
                                                        type="submit"
                                                        disabled={
                                                            !state.loginFormValidity
                                                        }
                                                    >
                                                        Login
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
            )}
        </Layout>
    )
}

export default connect(state => ({
    state: {
        loading: state.loading,
        loginForm: state.loginForm,
        loginFormValidity: state.loginFormValidity,
    },
}))(withRouter(Home))
