import React from "react"
import "../scss/base.scss"
import { connect } from "react-redux"
import * as actionCreators from "../store/actions/actionCreators"
import { withRouter } from "react-router-dom"
import Layout from "../components/Layout"
import Spinner from "../components/UI/Spinner"
import Input from "../components/UI/Input"
import { Row, Col, Form, Button, Card, CardBody } from "reactstrap"

const Home = ({ state, dispatch, location }) => {
    const onSignUp = event => {
        event.preventDefault()
        const userData = {
            email: state.signUpForm.email.value,
            userName: state.signUpForm.userName.value,
            fullName: state.signUpForm.fullName.value,
            password: state.signUpForm.password.value,
        }
        dispatch(actionCreators.signUp(userData))
    }

    return (
        <Layout>
            {state.loading ? (
                <Spinner />
            ) : (
                <>
                    <Row className='mt-5'>
                        <Col>
                            <h2 className='mt-0 mb-0'>Welcome to</h2>
                            <h1 className='display-1 mb-3'>Excursions</h1>
                            <h3 className='lead'>Create, plan, learn and go outdoors!</h3>
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
                                            <Form
                                                className="form"
                                                onSubmit={event =>
                                                    onSignUp(event)
                                                }
                                            >
                                                {Object.entries(
                                                    state.signUpForm
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
                                                        invalid={
                                                            !input[1].valid
                                                        }
                                                        validation={
                                                            input[1].validation
                                                        }
                                                        touched={
                                                            input[1].touched
                                                        }
                                                        focusChanged={
                                                            input[1]
                                                                .focusChanged
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
                                                                !state.signUpFormValidity
                                                            }
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
                </>
            )}
        </Layout>
    )
}

export default connect(state => ({
    state: {
        loading: state.loading,
        signUpForm: state.signUpForm,
        signUpFormValidity: state.signUpFormValidity,
    },
}))(withRouter(Home))
