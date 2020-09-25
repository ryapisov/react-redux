import React from "react"

export const Posts = (props) => {
  const posts = props.posts || []

  return (
    <div>
      <br />
      <br />
      <button onClick={props.getPosts}>Получить посты</button>
      <div>
        Лист:
        <ul>
          {posts.map((post, i) =>
            <li key={i}>{post}</li>
          )}
        </ul>
      </div>
    </div>
  )
}