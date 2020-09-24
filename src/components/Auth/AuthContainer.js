import React from "react"
import { connect } from "react-redux"
import { setEmailText, setPasswordText } from "../../store/auth/actions"
import { Auth } from "./Auth"

const AuthContainer = (props) => {
  return (
    <Auth
      email={props.email}
      password={props.password}
      setEmailText={props.setEmailText}
      setPasswordText={props.setPasswordText}
    />
  )
}

// из стейта в пропсы
const mapStateToProps = (state) => {
  return {
    email: state.authReducer.email,
    password: state.authReducer.password
  }
}

// привязать dispatch
const mapDispatchToProps = {
  setEmailText,
  setPasswordText
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)