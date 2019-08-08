import React, { useEffect } from "react"
import { connect } from "react-redux"
import Spinner from "../components/UI/Spinner/Spinner"
import * as actionCreators from "../store/actions/actionCreators"

const Home = ({ state, dispatch }) => {
    const onSignUp = event => {
        //event.preventDefault()
        const userData = {
            email: "test@wteswtness.com",
            userName: "testww1234",
            fullName: "test testy",
            password: "tesiness123",
        }
        dispatch(actionCreators.signUp(userData)) // call the actionCreator signUp and pass what will be formData with user input.
    }

    useEffect(() => {
        // Just a to test the request.
        // onSignUp()
    }, [])

    return state.loading ? <Spinner /> : <p>HOMEPAGE</p>
}

export default connect(state => ({
    state: {
        loading: state.loading,
    },
}))(Home)
