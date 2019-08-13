import * as actionTypes from "../actions/actionTypes"
import { updateState, authForms } from "../../shared/utility"
import { authForm, signUpForm } from '../../shared/forms'

const initialState = {
    _id: null,
    email: null,
    userName: null,
    fullName: null,
    token: null,
    tokenExpiry: null,
    error: null,
    loading: false,
    authForm: authForm,
    authFormValidity: false,
    signUpForm: signUpForm,
    signUpFormValidity: false,
    invalidMessage: null,
}

const authSuccess = userData => {
    return {
        _id: userData._id,
        email: userData.email,
        userName: userData.userName,
        fullName: userData.fullName,
        token: userData.token,
        tokenExpiry: userData.tokenExpiry,
        loading: false,
    }
}

// Our helper function "updateState()" inherently copies state and allows us to use a function as the 2nd argument. This passed function MUST return an object.
// action references the keys of the properties in our actionCreators.
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING: return updateState(state, { loading: true }) // Change loading to true.
        case actionTypes.INPUT_CHANGE: return updateState(state, authForms(state.authForm, state.signUpForm, action.event, action.ident, state, action.url)) // Call authForms and return the mutated input objects based on user input.
        case actionTypes.REQUEST_FAIL: return updateState(state, { error: action.error, loading: false }) // If there's an error, get the value for the error key and put it in state.
        case actionTypes.AUTH_SUCCESS: return updateState(state, authSuccess(action.userData)) // With our helper function we can return a function that returns an object with all of our changes.
        default: return state
    }
}

export default reducer
