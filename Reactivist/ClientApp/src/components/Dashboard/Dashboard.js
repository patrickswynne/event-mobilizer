import React, { Component } from 'react';

export class Dashboard extends Component {

    static displayName = Dashboard.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    };

    render() {
        return (
            <div>
                <p>test</p>

                <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

                <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>

            </div>
        )
    };

    somefunction() {
        this.state.name = "dashboard";
    };
}