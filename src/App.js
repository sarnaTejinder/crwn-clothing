import React from 'react';

import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component'

class App extends React.Component {


  render() {

    const HatsPage = () => (
      <div>
        <h1>Hats Page</h1>
      </div>
    )
    return (
      <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </div>
    );
  }
}

export default App;
