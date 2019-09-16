import React from "react"
import ReactDOM from "react-dom"
import "./scss/base.scss"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)

serviceWorker.unregister()
