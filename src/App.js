import React from 'react';

import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component'

import ShopPage from './pages/shop/shop.component'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </div>
    );
  }
}

export default App;
