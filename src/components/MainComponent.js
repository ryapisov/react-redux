import React, { Component } from "react"
import Auth from "./Auth/AuthContainer"
import Registration from "./Registration/RegistrationContainer"
import Posts from "./Posts/PostsContainer"

export const MainComponent = () => {
  return (
    <>
      <Auth />
      <Registration />
      <Posts />
    </>
  )
}