import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './components/Login.js'
import Dashboard from './components/Dashboard.js'
import BootstrapTest from './components/BootstrapTest.js'
import './App.css';

export class App extends Component {

  
  render() {
    return (
      <div className='App'>
          <NavBar/><br/><br/><br/>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/test' component={BootstrapTest} />
              <Route path='/dashboard' component={Dashboard} />

              
          </Switch>
      </div>

    )
  }
}

export default connect()(withRouter(App))
