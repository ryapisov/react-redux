import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import logger from "redux-logger"
import { MainComponent } from "./components/MainComponent"
import rootReducer from "./store/reducers"
import './style.scss'

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>, document.getElementById('root')
)