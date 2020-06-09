import React ,{ Component } from 'react';

import Header from './Header'
import ProductList from './ProductList'

import { Provider } from './OrderContext'
class ProductApp extends Component{
  state = {
    orders: []
  }
  addOrder = order => {
    this.setState({
      orders: [...this.state.orders, order]
    })
  }
  render() {
    const { orders } = this.state
    return (
      <div>
        <h1>hello</h1>
        <Provider value={orders}>
          <Header />
          <ProductList addOrder={this.addOrder} />
        </Provider>
      </div>
    )
  }
}
export default ProductApp;