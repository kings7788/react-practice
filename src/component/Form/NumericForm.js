import React, { Component } from 'react'

class NumericFormControl extends Component{
  state = {
    count: 0,
  }
  onChange = e => {
    this.setState({
      count : parseInt(e.target.value, 10)
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div >
        <div className="card-body">
          <form>
            <div className="input-group">
              <input className="input--style-1" type="number" value={count} onChange={this.onChange} />
              <h2>{count+1}</h2>
            </div>
            </form>
        </div>
      </div>
    )
  }
}

export default NumericFormControl;