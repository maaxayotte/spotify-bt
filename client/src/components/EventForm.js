import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'
import ErrorList from './ErrorList'
import translateServerErrors from './../services/translateServerErrors'
import getCurrentUser from './../services/getCurrentUser'

const EventForm = (props) => {
  const [errors, setErrors] = useState([])
  const [shouldRedirect, setShouldRedirect]= useState(false)

  const [newEventId, setNewEventId] = useState([])
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    description: ''
  })

  const addNewEvent = async () => {
    const currentUser = await getCurrentUser();
    const eventData = {
      ...newEvent,
      userId: currentUser.id
    }
    try {
      const response = await fetch('/api/v1/events', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(eventData)
      })
      if (!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
      } else {
        const body = await response.json()
        const newEvent = body.event
        setNewEventId(newEvent.id)
        if(body.event) {
          setShouldRedirect(true)
        }
      }
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const handleInputChange = event => {
    setNewEvent({
      ...newEvent,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewEvent(newEvent)
    clearForm()
  }

  const clearForm = () => {
    setNewEvent({
      name: '',
      date: '',
      description: ''
    })
  }

  if (shouldRedirect){
    return <Redirect to={`/events/${newEventId}`} />
  }

  return (
    <div>
      <ErrorList errors={errors} />
      <h1>Add a New Event</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type='text'
              name='name'
              onChange={handleInputChange}
              value={newEvent.name}
            />
          </label>

          <label>
            Date:
            <input 
              type='text'
              name='date'
              onChange={handleInputChange}
              value={newEvent.date}
            />
          </label>

          <label>
            Description:
            <textarea 
              name='description'
              rows='6'
              onChange={handleInputChange}
              value={newEvent.description}
            />
          </label>

          <input 
            type='submit'
            value='Submit'
          />
        </form>
    </div>
  )
}

export default EventForm
