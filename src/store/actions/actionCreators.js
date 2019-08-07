import * as actionTypes from './actionTypes'
import axios from 'axios'

const loading = () => { type: actionTypes.LOADING } // Do nothing but send LOADING to the reducer when called.

const requestFail = err => { // If signUp fails send REQUEST_FAIL with error to the reducer.
    return {
        type: actionTypes.REQUEST_FAIL,
        error: err
    }
}

const authSuccess = userData => { // If signUp succeeds send AUTH-SUCCESS with userData to the reducer.
    return {
        type: actionTypes.AUTH_SUCCESS,
        userData: userData
    }
}

export const signUp = userData => { // Receive userData and make a request to the backend.
    return dispatch => {
        axios.post('', {
            variables: {
                email: userData.email,
                userName: userData.userName,
                fullName: userData.fullName,
                password: userData.password
            },
            query: `
                mutation signUp($email: String!, $userName: String!, $fullName: String!, $password: String!) {
                    signUp(userInput: {email: $email, userName: $userName, fullName: $fullName, password: $password}) {
                        _id
                        email
                        userName
                        fullName
                        photo
                        password
                        token
                        tokenExpiry
                    }
                }
            `
        }).then(res => res.data.errors ?
            dispatch(actionCreators.requestFail(res.data.errors[0].message)) : // If there's an error, call requestFail and send error data.
            dispatch(authSuccess(res.data.data.signUp))) // If we succeed, call authSuccess and send the userData.
    }
}