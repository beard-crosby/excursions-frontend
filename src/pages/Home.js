import React from "react"
import { connect } from "react-redux"
import Spinner from '../components/UI/Spinner/Spinner'
import * as actionCreators from '../store/actions/actionCreators'

const Home = ({ state, dispatch }) => {

    const onSignUp = event => {
        event.preventDefault()
        const userData = {

        }
        dispatch(actionCreators.signUp(userData)) // call the actionCreator signUp and pass what will be formData with user input.
    }

    return (
        state.loading ? <Spinner /> : <p>{state.userName}</p>
    )
}

export default connect(state => ({
    state: {
        loading: state.loading
    },
}))(Home)