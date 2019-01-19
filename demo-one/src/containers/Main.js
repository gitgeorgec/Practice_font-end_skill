import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import Index from '../containers/Index'
import AppOverview from './app/AppOverview'

import {Switch, Route} from 'react-router-dom';

class Main extends Component {
  
    render() {
      return (
        <React.Fragment>
              <Navbar />
              <Switch>
                <Route exact path={"/"} render={()=><Index />}/>
                <Route exact path={"/app/overview"} render={()=><AppOverview/>}/>
                <Route exact path={"/technologies/overview"} render={()=><AppOverview/>}/>
                <Route exact path={"/company/about"} render={()=><AppOverview/>}/>
              </Switch>
        </React.Fragment>
      );
    }
  }
  
  export default Main;
  