import React, { Component } from 'react';

export class Preferences extends Component {

    static displayName = Preferences.name;

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

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

}