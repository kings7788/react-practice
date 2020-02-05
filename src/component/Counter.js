import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Counter extends Component{

  constructor(props) {
    super(props)
    this.state = {
      count: props.initCount,
    };
  }
  addCount = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      }
    })
    this.setState(
      {
        count: this.state.count +1,
      },
      () => {
        this.sendCount();
      },
    )
  };

  sendCount = () => {
    fetch(`/api/count?value=${this.state.count}`)
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="btn btn--pill btn--green" onClick={this.addCount}>+1</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  initCount: 0,
}
Counter.propTypes = {
  initCount: PropTypes.number,
}
export default Counter