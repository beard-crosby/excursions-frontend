// ActionTypes are used to cary data from a component to the reducer.
// It's usually the case that you'd want to do something with the data before it gets to the reducer however.
// Hence actionCreators. 

// misc
export const LOADING = 'LOADING'
export const INPUT_CHANGE = 'INPUT_CHANGE'

// auth
export const REQUEST_FAIL = 'REQUEST_FAIL'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const LOG_OUT = 'LOG_OUT'
