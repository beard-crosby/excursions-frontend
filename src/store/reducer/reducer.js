import * as actionTypes from '../actions/actionTypes'

const initialState = {
  user: {
    _id: null,
    email: null,
    userName: null,
    fullName: null,
  },
  token: null,
  tokenExpiry: null,
  error: null,
  loading: false
}

// ...state always before we do anything. Never mutate the state directly.
// action references the keys of the properties in our actionCreators. 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING: return { ...state, loading: true } // Change loading to true.
    case actionTypes.REQUEST_FAIL: return { ...state, error: action.error } // If there's an error, get the value for the error key and put it in state.
    default: return state
  }
}

export default reducer