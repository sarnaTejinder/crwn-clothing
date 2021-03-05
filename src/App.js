import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component'

import ShopPage from './pages/shop/shop.component'

import Header from "./components/header/header.component"

import SigninAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  userUnsubscribeFromAuth = null;

  componentDidMount() {
    this.userUnsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.userUnsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
