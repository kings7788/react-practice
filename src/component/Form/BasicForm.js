import React, { Component } from 'react'

class BasicFormControl extends Component{
  state = {
    text: 'abc'
  }
  onChange = e => {
    this.setState({
      text : e.target.value,
    });
  }
  render() {
    const { text } = this.state;
    return (
      <div >
        <div className="card-body">
          <form>
            <div className="input-group">
              <input className="input--style-1" type="text" value={text} onChange={this.onChange} />
              <h2>{text}</h2>
            </div>
            </form>
        </div>
      </div>
    )
  }
}

export default BasicFormControl;