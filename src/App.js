
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage.component';
import ShopPage from './pages/shop/shopPage/shopPage';
import Header from './components/header/header.component';
import SignInSignUp from './pages/singin-signup/singin-signup';
import { auth } from './firebase/firebase.utils';
import React from 'react';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignUp} />
          {/* <Route exact path='/jackets' component={JacketPage} />
          <Route exact path='/sneakers' component={SneakersPage} />
          <Route exact path='/women' component={WomensPage} />
          <Route exact path='/men' component={MensPage} /> */}
        </Switch>
      </div>
    );
  }
}



export default App;
