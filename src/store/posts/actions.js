import {
  POSTS_GET_ALL
} from '../types'

const updatePosts = (posts) => ({
  type: POSTS_GET_ALL,
  payload: posts
})

// async
export const loadPosts = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(updatePosts(['1', '2', '3']))
  }, 4000);
}

