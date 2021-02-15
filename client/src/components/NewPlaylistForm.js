import React, {useState} from 'react'

const NewPlaylistForm = () => {
  const [newPlaylist, setNewPlaylist] = useState({
    playlistUri: ''
  })
  
  const handleInputChange = event => {
    setNewPlaylist({
      ...newPlaylist,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <div>
      <form>
        <label>
          Playlist name:
          <input 
            className='input'
            id='playlistUri'
            type='text'
            name='playlistUri'
            value={newPlaylist.playlistUri}
            onChange={handleInputChange}
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
