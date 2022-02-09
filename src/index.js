import React from 'react'
import ReactDOM from 'react-dom'
// This Provider is from react-redux not react
import { Provider } from 'react-redux'

import store from './store'
import './api/server'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
