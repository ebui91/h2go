import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//import Components to be rendered here
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/Cart';
import Products from './components/Products/Products';
import Detailed from './components/Detailed/Detailed';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PureDrawer from './components/PureDrawer';

export default(
  <BrowserRouter>
    <div>
      <Route component= { Home } exact path='/' />
      <Route component= { ShoppingCart } path='/cart' />
      <Route component= { Products } path='/products' />
      <Route component= { Detailed } path='/details/:id' />
      <Route component= { About } path='/about' />
      <Route component= { Contact } path='/contact' />
      <Route component= { PureDrawer } path='/pure' />
    </div>
  </BrowserRouter>
)
