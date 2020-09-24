import React from "react"

export const Auth = (props) => {

  const onEmailChange = (e) => {
    props.setEmailText(e.target.value)
  }

  const onPasswordChange = (e) => {
    props.setPasswordText(e.target.value)
  }

  return (
    <div>
      <div>Sign In</div>
      {`${props.email} ${props.password}`}
      <div>
        <input
          type="text"
          name="login"
          value={props.login}
          placeholder="one"
          onChange={(e) => onEmailChange(e)}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={props.password}
          placeholder="password"
          onChange={(e) => onPasswordChange(e)}
        />
      </div>
      <div>
        <button>Войти</button>
      </div>
    </div>
  )
}