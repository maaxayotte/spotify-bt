import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorList from './ErrorList'

import NewPlaylistForm from './NewPlaylistForm'
import NewParticipantForm from './NewParticipantForm'

const EventShow = (props) => {
  const [errors, setErrors] =useState([])
  const [event, setEvent ] = useState([]) 
  const { id } = useParams()

  const getEvent = async () => {
    try {
      const response = await fetch(`/api/v1/events/${id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage);
        throw (error)
      }
      const eventsBody = await response.json()
      setEvent(eventsBody.event)
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  useEffect (() => {
    getEvent()
  }, [])

  return(
    <div>
      <ErrorList errors={errors} />
      <div className='event-info'>
        <div className='info-top'>
          <p>{event.name}</p>
          <p>{event.date}</p>
        </div>
        <div className='info-bottom'>
          <p>{event.description}</p>
        </div>
      </div>
      <div className='entry-fields'>
        <div className='playlist-form'>
          <NewPlaylistForm />
        </div>
        <div className='participant-form'>
          <NewParticipantForm />
        </div>
      </div>
    </div>
  )
}

export default EventShow
