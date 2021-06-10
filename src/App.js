import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Register  from "./views/account/register";
import  Login  from "./views/account/login";
import  Dashboard  from "./views/dashboard/index";
import { Provider } from 'react-redux'
import { store } from "./store";
import { connect } from 'react-redux';


export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <Router>
          <Switch>
          {/*Authentication*/}
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
        </Provider>
      </div>
    )
  }
}