import React, { Component , createRef} from 'react';

class DoRef extends Component{
  myInput = createRef();

  componentDidMount() {
    this.myInput.current.focus();
  }

  // setRef = (input) => {
  //   this.myInput = input;
  // }
  render() {
    return (
      <div>
        <h3>Enter your name</h3>
        <input type="text" ref={this.myInput}/>
      </div>
    )
  }
}
export default DoRef;