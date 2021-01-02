import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import MessageBox from '../Components/MessageBox';
import {Link} from 'react-router-dom';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search 
    ? Number(props.location.search.split('=')[1]) 
    : 1;
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId,qty))
    } 
  },[dispatch,productId,qty]);
  const removeFromCartHandler = (id) => {
    // delete action
  }
  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
      {cartItems.length === 0 
        ? <MessageBox> Cart is Empty <Link to="/">Go shopping</Link></MessageBox>
        : (
          <ul>
            {cartItems.map(item => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img src={item.image} alt={item.name} className="small"></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select 
                      value={item.qty} 
                      onChange={e => dispatch(addToCart(item.product, Number(e.target.value)))}>
                        {
                        [...Array(item.countInStock).keys()]
                          .map(obj => <option key={obj + 1} value={obj + 1}>{obj + 1}</option>)
                        } 
                    </select>
                  </div>
                  <div>
                    ${item.price}
                  </div>
                  <div>
                    <button type="button" onClick={() => removeFromCartHandler(item.product)}>
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )
      }
    </div>
    <div className="col-1">
      <div className="card card-body">
        <ul>
          <li>
            <h2>
              Subtotal ({cartItems.reduce((acc,curr) => acc + curr.qty, 0)} items) : 
              ${cartItems.reduce((acc,curr) => acc + curr.price * curr.qty, 0)}
            </h2>
          </li>
          <button 
            type="button" 
            onClick={checkoutHandler} 
            className="primary block"
            disabled={cartItems.length === 0}> Proceed To Checkout
          </button>
        </ul>
      </div>
    </div>
  </div>
  )
}
