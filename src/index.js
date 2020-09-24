import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from "./App.js"
import './style.scss'

const initialState = {
  oneInput: 'Илья',
  twoInput: 'Балашов'
}

const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME'
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME'


const rootReduser = (state = initialState, action) => {

  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return {
        ...state, oneInput: action.payload
      }
    case ACTION_CHANGE_SECOND_NAME:
      return {
        ...state, twoInput: action.payload
      }
  }

  return state
}

const store = createStore(rootReduser)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)