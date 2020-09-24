import {
  AUTH_CHANGE_EMAIL_TEXT,
  AUTH_CHANGE_PASSWORD_TEXT
} from '../types'

export const setEmailText = (email) => ({
  type: AUTH_CHANGE_EMAIL_TEXT,
  payload: email
})

export const setPasswordText = (password) => ({
  type: AUTH_CHANGE_PASSWORD_TEXT,
  payload: password
})