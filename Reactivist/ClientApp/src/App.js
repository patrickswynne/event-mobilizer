import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Events } from './components/Events/Events';
import { Welcome } from './components/Welcome';
import { FindEvents } from './components/Events/FindEvents';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Preferences } from './components/Preferences/Preferences';
import { PopularEvents } from './components/Events/PopularEvents';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <div class="container">
                <div class="row">
                    <div class="col-9">
                        <Route exact path='/' component={Home} />
                        <Route path='/events' component={Events} />
                        <Route path='/fetch-data' component={FetchData} />
                        <Route path='/Welcome' component={Welcome} />
                        <Route path='/find-events' component={FindEvents} />
                        <Route path='/Dashboard' component={Dashboard} />
                        <Route path='/Preferences' component={Preferences} />
                    </div>
                    <div class="col-3">
                        <React.Fragment>
                            <PopularEvents />
                        </React.Fragment>
                    </div>  
                </div>
            </div>
      </Layout>
    );
  }
}
