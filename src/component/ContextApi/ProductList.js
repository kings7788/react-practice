import React from 'react';

import Product from './Product'

const products = [
  { id: 1, name: 'Python' },
  { id: 2, name: 'Java' },
  { id: 3, name: 'Php' },
  { id: 4, name: 'Ruby' },
  { id: 5, name: '.Net' },

]

const ProductList = ({addOrder}) => (
  <ul>
    {products.map(product => (
        // console.log({ product });
        // console.log('no');
      <Product {...product}
        addOrder={addOrder}
        key={product.id} />
      )
    )}
  </ul>
)

export default ProductList;