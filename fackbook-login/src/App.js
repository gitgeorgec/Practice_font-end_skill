import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FacebookLoginButton from './components/FacebookLoginBtn';

import Facebook from './components/Facebook'

class App extends Component {
  state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }
  render() {

    return (
      <div className="App">
        <FacebookLoginButton/>
        <Facebook />
      </div>
    );
  }
}


export default App;
