import React, { Component } from 'react'
import EventListItem from './EventListItem';

 class EventList extends Component {
  render() {
      const { events } = this.props;

    return (
      <div>
        <h1> List </h1>
        {
            events.map( i => <EventListItem key={i.id} event= {i}/>

            )
        }
              
      </div>
    )
  }
}

export default EventList;