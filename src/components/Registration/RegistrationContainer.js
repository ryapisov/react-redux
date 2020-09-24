import React from "react"
import { connect } from "react-redux"
import { setEmailText, setPasswordText, setRepeatPasswordText } from "../../store/registration/actions"
import { Registration } from "./Registration"

const RegistrationContainer = (props) => {
  return (
    <Registration
      email={props.email}
      password={props.password}
      repeatPassword={props.repeatPassword}
      setEmailText={props.setEmailText}
      setPasswordText={props.setPasswordText}
      setRepeatPasswordText={props.setRepeatPasswordText}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    email: state.registrationReducer.email,
    password: state.registrationReducer.password,
    repeatPassword: state.registrationReducer.repeatPassword
  }
}

const mapDispatchToProps = {
  setEmailText,
  setPasswordText,
  setRepeatPasswordText
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)