import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { initSentry } from './libs/initSentry'

initSentry()

ReactDOM.render(<App />, document.getElementById('app'))
