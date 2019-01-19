import React, { Component } from 'react';
import Main from './containers/Main'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    );
  }
}

export default App;
