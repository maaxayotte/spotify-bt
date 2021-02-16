import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import EventForm from './EventForm'
import EventIndex from './EventIndex'
import EventShow from './EventShow'


const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);
  return (
    <Router>
      <TopBar user={currentUser} />
      <div>
        <div className='home-page-info'>
          <h2>Welcome to SpotVotes!</h2>
          <div className='welcome-text'>
            <p>SpotVotes requires a user to create an account to be able to participate in events, or create their own! Please navigate to the top of the page to sign up!</p>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route exact path="/events/mine" component={EventIndex} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/events/new" component={EventForm} />
        <Route exact path="/events/:id" component={EventShow} />
      </Switch>
    </Router>
  );
};

export default hot(App);
