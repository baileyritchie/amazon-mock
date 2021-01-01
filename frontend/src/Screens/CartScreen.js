import React from 'react'

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search 
    ? Number(props.location.search.split('=')[1]) 
    : 1;
  // will return the value after question mark in url
  return (
    <div>
      <h1>Cart Screen</h1>
      <p> ADD TO CART : ProductId: {productId} Qty: {qty}</p>
    </div>
  )
}
