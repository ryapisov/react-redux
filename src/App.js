import React, { Component } from "react";
import { connect } from 'react-redux'

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <div><input value={this.props.one} placeholder="one" /></div>
        <div><input value={this.props.two} placeholder="two" /></div>
      </div>
    );
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