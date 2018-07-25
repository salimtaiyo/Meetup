import React, { Component } from 'react'
import cuid from 'cuid';
import { connect } from 'react-redux';
import { createEvent, deleteEvent, updateEvent } from '../eventReducer';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';




const mapState = (state) => ({
  events: state.events
})

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}

class EventDashboard extends Component {
  
  state={
    // event: events,
    isOpen: false,
    selectedEvent: null
  }

  formClose = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      selectedEvent:null
    })
  }

  createEvent = (newE) => {
    newE.id = cuid();
    newE.hostPhotoURL = '/assets/user.png';
    // const newArray = [...this.state.event, newE]
    this.props.createEvent(newE)
    this.setState({
      // event: newArray,
      isOpen:false
    })

  }

  editEvent = (edit) => () => {
    console.log(edit);
    this.setState({
      selectedEvent:edit,
      isOpen:true
    })
  }

  formUpdate = (updatedForm) =>{
    this.props.updateEvent(updatedForm);
     this.setState({
      // event: this.state.event.map( i => {
      //   if(i.id === updatedForm.id){
      //     return Object.assign({}, updatedForm)
      //   }else{
      //     return i;
      //   }
      // }),
      isOpen:false
    })
  }

  // this.setState({
    //   event: this.state.event.filter( i => {
    //     return i.id !== deleteId.id
    //   })
    // })
  deleteList = (eventId) => ()=>{

     this.props.deleteEvent(eventId);
  }

  render() {
    return (
      <div>
        <Grid>
            <Grid.Column width={10}>
                <EventList
                  events = {this.props.events}
                  edit={this.editEvent}
                  delete={this.deleteList} 
                />
            </Grid.Column>

            <Grid.Column width={6}>
                <Button onClick={this.formClose} positive content="Create Event"/>

               { this.state.isOpen && <EventForm update={this.formUpdate} 
                                                 selectedEvent={this.state.selectedEvent} 
                                                 addEvent={this.createEvent} 
                                                 close={this.formClose}
                                                 />}

            </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(mapState, actions)(EventDashboard);