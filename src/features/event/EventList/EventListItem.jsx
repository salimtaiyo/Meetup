import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment,Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
  render() {
    const { event } = this.props;
    return (
           <Segment.Group>
              <Segment>
                <Item.Group>
                  <Item>
                    <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                    <Item.Content>
                      <Item.Header as="a">{event.title}</Item.Header>
                      <Item.Description>
                        Hosted by <a>{event.hostedBy}</a>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Segment>
              <Segment>
                <span>
                  <Icon name="clock" /> {event.date} |
                  <Icon name="marker" /> {event.venue}
                </span>
              </Segment>
              <Segment secondary>
                <List horizontal>
                  { event.attendees && event.attendees.map( i => <EventListAttendee 
                                              key={i.id} 
                                              attendees={i}
                                              />)}
                </List>
              </Segment>
              <Segment clearing>
                <span> {event.description} </span>
                <Button onClick={this.props.delete(event.id)} as="a" color="red" floated="right" content="Delete" />                
                <Button  as={Link} to={`event/${event.id}`}color="teal" floated="right" content="View" />
              </Segment>
            </Segment.Group>
    )
  }
}

export default  EventListItem;

// <Button onClick={this.props.edit(event)} as="a" color="teal" floated="right" content="View" />