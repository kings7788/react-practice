import React from 'react';

import { Consumer } from './OrderContext'

const Header = ({orders=[]}) => (
  <div>
    <span>
    <Consumer>
      {value => (
        `購物車(${value.length})`
      )}
      </Consumer>
    </span>
    <hr/>
  </div>
)
export default Header;