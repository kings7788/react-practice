import React, { Component } from 'react'

const relations=[
  {label:'父',value:0},
  {label:'母',value:1},
  {label:'子',value:2},
  {label:'女',value:3},
  {label:'妻',value:4},
  {label:'友',value:5},
]

class SelectFormControl extends Component {
  state =  {
    rel : `${relations[0].value}`
  }
  onChange = e => {
    this.setState({
    rel : e.target.value,
  })}
  render() {
    const { rel } = this.state

    return (
      <div>
        <select value={rel} onChange={this.onChange}>
          {relations.map((relation) => (
            <option value={relation.value} key={relation.label}>{relation.label}</option>
          ))}
        </select>
        <h1>{relations.find(r => `${ r.value }`===rel).label}</h1>
      </div>
    )
  }
}
export default SelectFormControl;