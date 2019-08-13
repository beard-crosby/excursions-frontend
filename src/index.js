import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import axios from 'axios'
import './scss/base.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import reducer from './store/reducer/reducer'

// All axios requests are appended with this URL.
axios.defaults.baseURL = `${process.env.REACT_APP_BASE_API_ROUTE}/graphql`

// Redux Middleware.
let actionLogger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatch...', action)
            const result = next(action)
            console.log('[Middleware] State...', store.getState())
            return result
        }
    }
}

// Only use Redux Middleware and Chrome Redux Dev tools while in development.
const dev = process.env.NODE_ENV === 'development'
const store = dev ? createStore(reducer, composeWithDevTools(applyMiddleware(actionLogger, thunk)))
: createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
