import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Dashboard from './component/Dashboard'
import Wizard from './component/Wizard'

export default class Routes extends Component {
  render() {
    return <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/wizard" exact component={Wizard}/>
    </Switch>
  }
}