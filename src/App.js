import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Register  from "./views/account/register";
import  Login  from "./views/account/login";
import  Dashboard  from "./views/dashboard/index";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          {/*Authentication*/}
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
        
      </div>
    )
  }
}