import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainComponent from "./components/MainComponent"
import { rootReduser } from "./store/reducers"
import './style.scss'

const store = createStore(rootReduser)

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>, document.getElementById('root')
)