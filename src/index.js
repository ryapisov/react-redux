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

const actionChangeFirstName = {
  type: ACTION_CHANGE_FIRST_NAME,
  payload: null
}

const actionChangesSecondName = {
  type: ACTION_CHANGE_SECOND_NAME,
  payload: null
}

const rootReduser = (state = initialState, action) => {
  return state
}

const store = createStore(rootReduser)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)