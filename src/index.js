import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './scss/base.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

axios.defaults.baseURL = 'http://localhost:3001/graphql'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)

serviceWorker.unregister()
