import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import CartScreen from './Screens/CartScreen';
import { useSelector } from 'react-redux';
import SignInScreen from './Screens/SignInScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">amazona</Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            {
              cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )
            }
            <Link to="/signin">Sign In</Link> 
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/signin" component={SignInScreen}></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
