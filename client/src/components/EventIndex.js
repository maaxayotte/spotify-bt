import React, {  useState, useEffect} from 'react'
import EventTile from './EventTile.js'

const EventIndex = (props) => {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    try{
      const response = await fetch('/api/v1/events')
      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage);
        throw(error)
      }
      const eventsBody = await response.json()
      setEvents(eventsBody.events)
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  const eventTile = events.map(event => {
    return (
      <EventTile 
        key={event.id}
        event={event}
      />
    )
  })

 return (
   <div className='tiles'>
      {eventTile}
   </div>
 )
}

export default EventIndex
