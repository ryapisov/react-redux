import React from "react"

export const Registration = (props) => {
  const onEmailChange = (e) => {
    props.setEmailText(e.target.value)
  }

  const onPasswordChange = (e) => {
    props.setPasswordText(e.target.value)
  }

  const onRepeatPasswordChange = (e) => {
    props.setRepeatPasswordText(e.target.value)
  }

  return (
    <div>
      <div>Sign UP</div>
      {`${props.email} ${props.password} ${props.repeatPassword}`}
      <div>
        <input
          type="text"
          name="email"
          value={props.email}
          placeholder="email"
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
        <input
          type="password"
          name="repeat_password"
          value={props.repeatPassword}
          placeholder="repeat password"
          onChange={(e) => onRepeatPasswordChange(e)}
        />
      </div>
      <div>
        <button>Зарегистрировать</button>
      </div>
    </div>
  )
}