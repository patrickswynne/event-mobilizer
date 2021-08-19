import React, { Component } from 'react';

export class Welcome extends Component {
    static displayName = Welcome.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Search for events by City, State or Name</h2>
                <p>What is React? React is a declarative,efficient, and flexible
                JavaScript library for <br />
                building user interfaces. It lets you compose complex UIs
                from small and <br />isolated pieces of code called "components".
                </p>
            </div>
        );
    }
}   