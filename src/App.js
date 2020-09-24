import React, { Component } from "react"
import { connect } from "react-redux"

const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME'
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME'

const changeOne = (newFirstName) => {
  console.log(newFirstName)
  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName
  }
}

const changeTwo = (newSecondName) => {
  console.log(newSecondName)
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: newSecondName
  }
}
class App extends Component {
  render() {
    const dispatch = this.props.dispatch

    return (
      <div>
        <div>{this.props.one + ' ' + this.props.two}</div>
        <div>
          <input
            value={this.props.one}
            placeholder="one"
            onChange={(e) => { dispatch(changeOne(e.target.value)) }}
          />
        </div>
        <div>
          <input
            value={this.props.two}
            placeholder="two"
            onChange={(e) => { dispatch(changeTwo(e.target.value)) }}
          />
        </div>
      </div>
    )
  }
}

// данные из state в компонент
const mapStateToProps = (state) => {
  return {
    one: state.oneInput,
    two: state.twoInput
  }
}

export default connect(mapStateToProps, null)(App)