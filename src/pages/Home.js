import React, { useEffect } from "react"
import { connect } from "react-redux"
import Spinner from "../components/UI/Spinner/Spinner"
import * as actionCreators from "../store/actions/actionCreators"
import Layout from '../components/Layout'

const Home = ({ state, dispatch }) => {
    const onSignUp = event => {
        //event.preventDefault()
        const userData = {
            email: "test@wsteswtness.com",
            userName: "testsww1234",
            fullName: "test testy",
            password: "tesiness123",
        }
        dispatch(actionCreators.signUp(userData)) // call the actionCreator signUp and pass what will be formData with user input.
    }

    useEffect(() => { // Just a to test the request.
        // onSignUp() // Uncomment me and refresh to make a request
    }, [])

    return (
        <Layout>
            {state.loading ? <Spinner /> : <p>HOMEPAGE</p>}
        </Layout>
    )
}

export default connect(state => ({
    state: {
        loading: state.loading,
    },
}))(Home)
