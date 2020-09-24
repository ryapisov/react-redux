import React, { Component } from "react"
import Auth from "./Auth/AuthContainer"
import Registration from "./Registration/RegistrationContainer"

export const MainComponent = () => {
  return (
    <>
      <Auth />
      <Registration />
    </>
  )
}