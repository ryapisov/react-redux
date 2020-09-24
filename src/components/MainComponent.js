import React, { Component } from "react"
import { connect } from "react-redux"
import { changeOne, changeTwo } from "../store/actions"

class MainComponent extends Component {
  render() {
    const { changeOneName, changeTwoName } = this.props

    return (
      <div>
        <div>{this.props.one + ' ' + this.props.two}</div>
        <div>
          <input
            value={this.props.one}
            placeholder="one"
            onChange={(e) => { changeOneName(e.target.value) }}
          />
        </div>
        <div>
          <input
            value={this.props.two}
            placeholder="two"
            onChange={(e) => { changeTwoName(e.target.value) }}
          />
        </div>
      </div>
    )
  }
}

// данные из state в компонент
const putStateToProps = (state) => {
  return {
    one: state.oneInput,
    two: state.twoInput
  }
}

const putActionsToProps = (dispatch) => {
  return {
    changeOneName: (arg) => dispatch(changeOne(arg)),
    changeTwoName: (arg) => dispatch(changeTwo(arg))
  }
}

export default connect(putStateToProps, putActionsToProps)(MainComponent)