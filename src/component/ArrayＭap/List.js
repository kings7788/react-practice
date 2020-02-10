import React, { Component } from 'react'
import Item from '../Item';


class List extends Component {

  state = {
    list: [
      {'label':'noun','data':'Learn JavaScript'},
      {'label':'verb','data':'Learn React'},
      {'label':'adj','data':'Make Money'},
      {'label':'adv','data':'Buy a House'},
    ]
  }
  removeFirst = () => {
    this.setState({
      list: this.state.list.slice(1),
    })
  }
  render() {
    return (
      <div>
        {this.state.list.map(({ label, data}) => (
          <Item key={label} text={`${label}: ${data}`}>
            </Item>
        ))}

        <button className="btn btn--pill btn--green" onClick={this.removeFirst}>
          -
        </button>
      </div>
    )
  }
}
export default List;