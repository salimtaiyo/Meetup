import React, { Component } from 'react'
import cuid from 'cuid';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const events = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


class EventDashboard extends Component {
  
  state={
    event: events,
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
    const newArray = [...this.state.event, newE]
    this.setState({
      event: newArray,
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
     this.setState({
      event: this.state.event.map( i => {
        if(i.id === updatedForm.id){
          return Object.assign({}, updatedForm)
        }else{
          return i;
        }
      }),
      isOpen:false
    })
  }

  deleteList = (deleteId) => ()=>{
    this.setState({
      event: this.state.event.filter( i => {
        return i.id !== deleteId.id
      })
    })
  }

  render() {
    return (
      <div>
        <Grid>
            <Grid.Column width={10}>
                <EventList
                  events = {this.state.event}
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

export default EventDashboard;