import {
  POSTS_GET_ALL
} from '../types'

const defaultState = {
  posts: ['first']
}

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case POSTS_GET_ALL:
      return {
        ...state,
        posts: action.payload
      }
  }

  return state
}