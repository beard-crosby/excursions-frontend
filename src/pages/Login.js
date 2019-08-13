import React from "react"
import '../scss/base.scss'
import { connect } from "react-redux"
import * as actionCreators from "../store/actions/actionCreators"
import { withRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Spinner from "../components/UI/Spinner"
import Input from '../components/UI/Input'
import { Form, Button } from 'reactstrap'

const Home = ({ state, dispatch, location }) => {
    const onLogin = event => {
        event.preventDefault()
        const userData = {
            email: state.loginForm.email.value,
            password: state.loginForm.password.value
        }
        dispatch(actionCreators.login(userData))
    }

    return (
        <Layout>
            {state.loading ? <Spinner /> : 
                <Form className="form" onSubmit={event => onLogin(event)}>
                    {Object.entries(state.loginForm).map(input => <Input 
                        key={input[0]}
                        elementType={input[1].elementType}
                        name={input[1].name}
                        invalidName={input[1].invalidName}
                        placeholder={input[1].placeholder}
                        invalid={!input[1].valid}
                        validation={input[1].validation}
                        touched={input[1].touched}
                        focusChanged={input[1].focusChanged}
                        value={input[1].value}
                        changed={event => dispatch(actionCreators.inputChange(event, input[0], location.pathname))} />)}
                    <div className="singleFormBtn">
                        <Button outline color="primary" type="submit" disabled={!state.loginFormValidity}>Sign Up</Button>
                    </div>
                </Form>}
        </Layout>
    )
}

export default connect(state => ({
    state: {
        loading: state.loading,
        loginForm: state.loginForm,
        loginFormValidity: state.loginFormValidity
    },
}))(withRouter(Home))
