import React, { Component } from 'react';
import { Welcome } from './Welcome';

export class FindEvents extends Component {
    constructor(props) {
        super(props);
        this.state = { calenderEvents: [], loading: true };
    }
    render() {
        return (
            <React.Fragment>
                <Welcome />
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.populateCalendarEventsData();
    }

    static renderCalendarEventsTable(calenderEvents) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {calenderEvents.map(calenderEvent =>
                        <tr key={calenderEvent.city}>
                            <td>{calenderEvent.city}</td>
                            <td>{calenderEvent.description}</td>
                            <td>{calenderEvent.date}</td>
                            <td>View</td>
                        </tr>
                    )}
                </tbody>
            </table>

        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FindEvents.renderCalendarEventsTable(this.state.calenderEvents);

        return (
            
            <div>
                <h1 id="tabelLabel" >Calendar Events</h1>
                <p>Find events in your city and state.</p>
                {contents}
            </div>
        );
    }

    async populateCalendarEventsData() {
        const response = await fetch('CalendarEvents');
        const data = await response.json();
        console.log(data);
        this.setState({ calenderEvents: data, loading: false });
    }
}