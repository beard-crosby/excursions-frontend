// This helper function will allow is to keep our reducer switches more readable and compact.
export const updateState = (state, updatedValues) => {
    return {
        ...state,
        ...updatedValues,
    }
}

// This helper function injects headers to our axios requests that require authentication.
export const headers = token => {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
}

// Take in the validation object of the form[ident] and depending on the type of validation required
// use regex to validate that input. 
const isValid = (val, rules, event) => {
    let valid = true
    if (rules.emailRequired) {
        valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event) && valid // eslint-disable-line no-useless-escape
    }
    if (rules.userNameRequired) {
        valid = /^[a-z0-9_-]{6,12}$/gim.test(event) && valid // eslint-disable-line no-useless-escape
    }
    if (rules.passwordRequired) {
        valid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(event) && valid // eslint-disable-line no-useless-escape
    }
    if (rules.required) {
        valid = val.trim() !== "" && valid // trim = doesn't become true with whitespace.
    }
    return valid
}

// Take in the entire form object, with ident find the particular input we're altering.
// Depending on user input, mutate the values of the input object accordingly. 
const inputArr = ["zero", "one"]
const inputChangedHandler = (formObj, event, ident, state) => {
    const form = { ...formObj }
    event.persist()
    form[ident].value = event.target.value
    form[ident].valid = isValid(form[ident].value, form[ident].validation, event.target.value)
    form[ident].touched = true
    // Check if the user has moved on to another input.
    if (inputArr[0] !== form[ident].name) {
        inputArr.length === 2 && inputArr.pop()
        inputArr.unshift(form[ident].name)
    }
    Object.entries(form).map(i => {
        if (i[0].toUpperCase() === inputArr[1].toUpperCase()) {
            i[1].focusChanged = true
        }
        return null // just to satisfy eslint.
    })
    // Check if rePassword is the same as the password input.
    if (form[ident].validation.rePasswordRequired) {
        form[ident].valid = form.password.value === form.rePassword.value
    }
    // If input isn't valid && user has moved on, populate state.invalidMessage.
    if (!form[ident].valid) {
        state.invalidMessage = form[ident].invalidMessage
    }
    return form
}

// Check to make sure all of the required inputs are valid. If so,
// set form over-all validity in state to true which enables a button.
const isFormValid = formObj => {
    let valid = true
    for (let i in formObj) {
        valid = formObj[i].valid && valid
    }
    return valid
}

// Depending on what url the user is currently on,
// mutate the allocated state keys with the functions above.
export const authForms = (login, signUp, event, ident, state, url) => {
    if (url === '/') {
        return {
            signUpForm: inputChangedHandler(signUp, event, ident, state),
            signUpFormValidity: isFormValid(signUp),
        }
    } else if ((url === '/login')) {
        return {
            loginForm: inputChangedHandler(login, event, ident, state),
            loginFormValidity: isFormValid(login),
        }
    }
}