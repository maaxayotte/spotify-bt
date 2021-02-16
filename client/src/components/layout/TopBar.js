import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new" className='log-in'>Log In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button" className="sign-up">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  const img='https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png'

  return (
    <div className="top-bar" id='top-bar-color'>
        <img src={img} className='icon'/>
        <ul className="menu" id='ul-elements'>
          <li className="menu-text"></li>
          <li>
            <Link to='/' className='page-links'>Home</Link>
          </li>
          <li>
            <Link to='/events/mine' className='page-links'>My Events</Link>
          </li>
          <li>
            <Link to='/events/new' className='page-links'>Add a New Event</Link>
          </li>
        </ul>
      <div className="top-bar-right">
        <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
