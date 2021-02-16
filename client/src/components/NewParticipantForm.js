import React, { useState } from 'react'

const NewParticipantForm = () => {
  const [newParticipant, setNewParticipant] = useState([])

  const handleInputChange = event => {
    setNewParticipant({
      ...newParticipant,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <div>
      <label>
          Participant email:
          <input 
            className='input'
            id='participantEmail'
            type='text'
            name='participantEmail'
            value={newParticipant.participantEmail}
            onChange={handleInputChange}
          />
        </label>
        <div>
          <input
            type='submit'
            value='Submit'
          />
        </div>
    </div>
  )
}

export default NewParticipantForm