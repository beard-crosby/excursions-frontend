import * as actionTypes from './actionTypes'
import axios from 'axios'

// Do nothing but send LOADING to the reducer when called.
const loading = () => { 
    return {
        type: actionTypes.LOADING
    } 
}

// When an input receives user input, take the event, the ident (which input are you),
// and the current url and pass that information to the reducer.
export const inputChange = (event, ident, url) => {
    return {
        type: actionTypes.INPUT_CHANGE,
        event: event,
        ident: ident,
        url: url
    }
}

export const logOut = () => {
    return {
        type: actionTypes.LOG_OUT
    }
}

// If signUp fails send REQUEST_FAIL with error to the reducer.
const requestFail = err => {
    return {
        type: actionTypes.REQUEST_FAIL,
        error: err
    }
}

// If signUp succeeds send AUTH-SUCCESS with userData to the reducer.
const authSuccess = userData => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userData: userData
    }
}

// Receive userData and make a request to the backend.
export const signUp = userData => {
    return dispatch => {
        dispatch(loading()) // call loading
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
            // If there's an error, call requestFail and send error data.
            dispatch(requestFail(res.data.errors[0].message)) :
            // If we succeed, call authSuccess and send the userData.
            dispatch(authSuccess(res.data.data.signUp)))
    }
}

export const login = userData => {
    return dispatch => {
        dispatch(loading())
        axios.post('', {
            variables: {
                email: userData.email,
                password: userData.password
            },
            query: `
                query Login($email: String!, $password: String!) {
                    login(email: $email, password: $password) {
                        _id
                        email
                        userName
                        fullName
                        photo
                        token
                        tokenExpiry
                    }
                }
            `
        }).then(res => res.data.errors ?
            dispatch(requestFail(res.data.errors[0].message)) :
            dispatch(authSuccess(res.data.data.login)))
    }
}