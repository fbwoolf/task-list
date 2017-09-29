import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Routes from './routes'
import {ThemeProvider} from 'styled-components'
import registerServiceWorker from './registerServiceWorker'

export const theme = {
  black: 'black',
  white: 'white',
  lightgrey: '#585f62',
  medgrey: '#3f4649',
  darkgrey: '#2d2f31',
  darkgreyhover: '#2c3835',
  green: '#23a86d',
  greenhover: '#209360'
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)

registerServiceWorker()
