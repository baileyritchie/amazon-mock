import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">amazona</a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="sigin.html">Sign In</a> 
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
