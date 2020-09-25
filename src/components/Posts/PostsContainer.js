import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadPosts } from "../../store/posts/actions"
import { Posts } from "./Posts"

const PostsContainer = () => {
  const posts = useSelector(state => state.postsReducer.posts)
  const dispatch = useDispatch()

  return (
    <Posts
      posts={posts}
      getPosts={() => dispatch(loadPosts())}
    />
  )
}

export default PostsContainer
