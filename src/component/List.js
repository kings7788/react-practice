import React, { Component } from 'react';
import Item from './Item';
class List extends Component{
  render() {
    return (
      <ol>
        <Item>hihihi</Item>
        <Item>hihihi333</Item>
      </ol>
    )
  }
}
export default List;