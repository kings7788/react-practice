import React, { Component } from 'react'
import Item from '../Item';

const steps = {
  name : 'Learn JavaScript',
  price : 3000,
  videos : 50,
  teacher : 'Buy a House'
}

class List extends Component {
  render() {
    return (
      <div>
        {Object.keys(steps).map((key, idx) => {
          const value = steps[key]
            return(
              <Item text={value} >
                {key}:{value}:{idx}
          </Item>
              )
          }
        )}
      </div>
    )
  }
}
export default List;