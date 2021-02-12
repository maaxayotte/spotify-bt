import React from 'react'
import { Link } from 'react-router-dom'

const EventTile = ({ event }) => {
  debugger
  return (
    <div>
        <ul>
          <li>
            Event name:
            <strong>{event.name}</strong>
          </li>
          <li>
            Event date:
            <strong>{event.date}</strong>
          </li>
        </ul>

        <input 
          type='button'
          value='View Event'
        />
    </div>
  )
}

export default EventTile
