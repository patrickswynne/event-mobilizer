import React, { Component, useState  } from 'react';
import { Welcome } from '../Welcome';

export class FindEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calenderEvents: [], loading: true,
            popularEvents: [], loading: true,
            username: "", loading: true,
            value: "",
            show: "",
            city: 'Dallas'
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
        //this.setState({ city: '' });
        ///if (this.state.city === '') {
        //    alert('componentDidMount')
        //    this.populateCalendarEventsData();
        //}
        this.populateCalendarEventsByCityData();
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
        //this.setState({ city: 'San Antonio' });
        //this.setState({ city: '' });
        //populateCalendarEventsByCityData()
    }

    submit = () => {
        this.setState({ show: this.state.value })
        //alert(this.state.city)
        //this.populateCalendarEventsByCityData()
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
                            <td>{calenderEvent.date.split(' ')[0]}</td>
                            <td>View</td>
                        </tr>
                    )}
                </tbody>
            </table>

        );
    }

    static renderPopularEventsByCity(popularEvents, city) {
        return (

            <div>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>city</th>
                            <th>Description</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {popularEvents.map(popularEvent =>
                            <tr key={popularEvent.Id}>
                                <td>{popularEvent.city}</td>
                                <td>{popularEvent.description}</td>
                                <td>{popularEvent.date.split(' ')[0]}</td>
                                <td>View</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <p>These are popular events in {city}</p>
            </div>
        );
    }

    render() {
        let events = this.state.loading
            ? <p><em>Loading...</em></p>
            : FindEvents.renderCalendarEventsTable(this.state.calenderEvents);

        let popularEvents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FindEvents.renderPopularEventsByCity(this.state.popularEvents, this.state.city);

        return (
            
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                <h2>{this.state.show}</h2>

                <h1 id="tabelLabel" >Calendar Events</h1>
                <p>Find events in your city and state.</p>
                <div class="row">
                    <div class="col-9">
                        {events}
                    </div>
                    <div class="col-3">
                        {popularEvents}
                    </div>
                </div>
                <i>{this.state.city} is being displayed</i>
            </div>
        );
    }



    async populateCalendarEventsData() { 
        // this is the main events
        let city = "all";
        const response = await fetch('CalendarEvents');
        const data = await response.json();
        console.log(data)
        this.setState({ calenderEvents: data, loading: false });
    }

    async populateCalendarEventsByCityData() {
        const response = await fetch('CalendarEvents/' + this.state.city);
        const data = await response.json();
        this.setState({ calenderEvents: data, loading: false });
        //show top 5 popular events from the results
        const dataPopular = data.sort((a, b) => a.AttendeesCount < b.AttendeesCount).reverse().slice(0, 3);
        this.setState({ username: "patrick 2" });
        this.setState({ popularEvents: dataPopular, loading: false });
    }

}