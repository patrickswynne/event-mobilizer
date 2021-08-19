import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Events } from './components/Events';
import { Welcome } from './components/Welcome';
import { FindEvents } from './components/FindEvents';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/events' component={Events} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/Welcome' component={Welcome} />
            <Route path='/find-events' component={FindEvents} />
      </Layout>
    );
  }
}
