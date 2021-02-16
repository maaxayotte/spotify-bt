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
      <div>
        <h1>{event.name}</h1>
        <h2>{event.date}</h2>
        <h3>{event.description}</h3>
      </div>
      <div>
        <NewPlaylistForm />
      </div>
      <div>
        <NewParticipantForm />
      </div>
    </div>
  )
}

export default EventShow
