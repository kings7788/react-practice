import React, { Component } from 'react'

class Child extends Component{
  state = {
    count: 0,
  }
  addCount = () => {
    this.setState({
      count: this.state.count +1,
    })
  }


  render() {
    const {addParent} = this.props

    return (
      <div>
        <h2>Child: {this.state.count}</h2>
        <button className="btn btn--pill btn--green" onClick={addParent}>+Parent</button>
        <button className="btn btn--pill btn--green" onClick={this.addCount}>+Child</button>
      </div>
    )
  }
}
export default Child;
