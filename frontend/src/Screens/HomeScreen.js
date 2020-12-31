import React from 'react';
import Product from '../Components/Product'
import data from '../data';
export default function HomeScreen() {
  return (
    <div className="row center">
      {data.products.map((product) => (
          <Product key={product._id} product={product}/> 
      ))}
    </div>
  )
}
