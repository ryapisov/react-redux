import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from './types'

export const changeOne = (newFirstName) => {
  console.log(newFirstName)
  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName
  }
}

export const changeTwo = (newSecondName) => {
  console.log(newSecondName)
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: newSecondName
  }
}