import React, { Component } from 'react';
import { FetchData } from './FetchData';
import { Welcome } from './Welcome';

export class Events extends Component {
    static displayName = Events.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

    incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
      return (
      <div>
            <h1>Events</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

              <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
              <React.Fragment>
                  <FetchData />
              </React.Fragment>
              <React.Fragment>
                  <Welcome />
              </React.Fragment>
      </div>
    );
  }
}
