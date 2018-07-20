import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

export default class EventForm extends Component {

  state = {
    event: {
      title:'',
      date:'',
      city:'',
      venue:'',
      hostedBy:''
    }
  }
  
  formControl = (e) => {
    e.preventDefault();
    this.props.addEvent(this.state.event);
  }

  onFormChange = (e) =>{
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;

    this.setState({
      event: newEvent
    })
  }

  render() {
    const {event} = this.state;

    return (
        <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input name="title" value={event.title} onChange={this.onFormChange} placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name="date" value={event.date} type="date" onChange={this.onFormChange} placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name="city" value={event.city} onChange={this.onFormChange} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name="venue" value={event.venue} onChange={this.onFormChange} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name="hostedBy" value={event.hostedBy} onChange={this.onFormChange} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button onClick={this.formControl} positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.close} type="button">Cancel</Button>
        </Form>
      </Segment>
    )
  }
}
