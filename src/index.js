import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import './scss/base.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import reducer from './store/reducer/reducer'

// All axios requests are appended with this URL.
axios.defaults.baseURL = 'http://localhost:3001/graphql'

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
const composeEnhancers = dev ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose
const store = dev ? createStore(reducer, composeEnhancers(applyMiddleware(actionLogger, thunk)))
: createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
