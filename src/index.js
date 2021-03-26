import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/base.css'
import './assets/css/grid.css'
import './assets/css/index.css'

// import store from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import configureStore from './store'
const initialState = {}
const { store } = configureStore(initialState)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
