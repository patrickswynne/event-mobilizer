import React, { Component } from 'react';
import { Welcome } from '../Welcome';

const user = {
    name: {
        first: "Patrick",
        last: "W"
    }
}
const element = <h1>{user.name.first}</h1>;

export class FindEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calenderEvents: [], loading: true,
            popularEvents: [], loading: true,
            username: "", loading: true
        }
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
                        <tr key={calenderEvent.Id}>
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

    static renderUser(username, popularEvents) {
        return (

            <div>
                <p>{username}</p>

                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Description</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {popularEvents.map(calenderEvent =>
                            <tr key={popularEvents.Id}>
                                <td>{popularEvents.city}</td>
                                <td>{popularEvents.description}</td>
                                <td>{popularEvents.date}</td>
                                <td>View</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FindEvents.renderCalendarEventsTable(this.state.calenderEvents);

        let user = this.state.loading
            ? <p><em>Loading...</em></p>
            : FindEvents.renderUser(this.state.username, this.state.popularEvents);

        return (
            
            <div>
                <h1 id="tabelLabel" >Calendar Events</h1>
                <p>Find events in your city and state.</p>
                <div class="row">
                    <div class="col-9">
                        {contents}
                    </div>
                    <div class="col-3">
                        {user}
                    </div>
                </div>
                {element}
            </div>
        );
    }



    async populateCalendarEventsData() {
        // this is the main events
        let city = "all";
        const response = await fetch('CalendarEvents/' + city);
        const data = await response.json();
        console.log(data)
        this.setState({ calenderEvents: data, loading: false });

        //show top 5 popular events from the results
        const dataPopular = data.sort((a, b) => a.AttendeesCount < b.AttendeesCount).reverse().slice(0, 3);
        console.log('sorting')
        console.log(dataPopular)
        this.setState({ username: "patrick 2" });
        this.setState({ popularEvents: dataPopular, loading: false });
    }
}