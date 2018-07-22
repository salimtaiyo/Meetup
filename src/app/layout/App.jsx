import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from '../../../node_modules/semantic-ui-react';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailed from '../../features/user/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
class App extends Component {
  render() {
    return (
     <div>
      <Switch>
      <Route path="/" component={HomePage} exact/>
      </Switch>

      <Route path="/(.+)"
        render={() => (
          <div>
            <NavBar/>
            <Container className="main">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/events" component={EventDashboard}/>
                <Route path="/event/:id" component={EventDetailedPage}/>
                <Route path="/people" component={PeopleDashboard}/>
                <Route path="/profile/:id" component={UserDetailed}/>
                <Route path="/settings" component={SettingsDashboard}/>
                <Route path="/createEvent" component={EventForm}/> 
              </Switch>
            </Container>
              </div>
        )} />
     </div>
     
        
    );
  }
}

export default App;
