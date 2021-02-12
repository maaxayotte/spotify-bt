import React, {useState} from 'react'

const NewPlaylistForm = () => {
  const [newPlaylist, setNewPlaylist] = useState({
    name: '',
    type: ''
  })
  
  const handleInputChange = event => {
    setNewPlaylist({
      ...newPlaylist,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  // handleSUbmit

  // attach to <form>

  // redirect if successful to event page to see new playlist

  // POST to `/api/v1/plyalists`
  return (
    <div>
      <form>
        <label>
          Name:
          <input 
            className='input'
            id='name'
            type='text'
            name='name'
            value={newPlaylist.name}
            onChange={handleInputChange}
            placeholder='Lorem'
          />
        </label>
        <label>
          Type:
          <input 
            className='input'
            id='type'
            type='text'
            name='type'
            value={newPlaylist.type}
            onChange={handleInputChange}
            placeholder='Playlist'
          />
        </label>

        <div>
          <input
            type='submit'
            value='Submit'
          />
        </div>
      </form>
    </div>
  )
}

export default NewPlaylistForm
