import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from './types'

const initialState = {
  oneInput: 'Илья',
  twoInput: 'Балашов'
}

export const rootReduser = (state = initialState, action) => {
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