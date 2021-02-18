// // make plural

// // import SPotifyCLient
// eventPlaylistsRouter.post("/", (req, res) => {
// // take params from user feed into SpotifyClient
// // User -< Event -< Playlists
// // return response
// // might make service object as wrapper to parse api response to match how your database is expecting to persist a Playlist object
// // persist Playlist associating with the Event
// // return new playlist
// })

import express from 'express'
import cleanUserInput from './../../../services/cleanUserInput.js'
import { Event } from './../../../models/index.js'
import objection from 'objection'
const { ValidationError } = objection
import SpotifyWebApi from 'spotify-web-api-node'

const spotifySearchRouter = new express.Router()
// const clientId = '009470cfd6244ed9accb4456fff40697'
// const clientSecret = 'c810f1d7564247c39797cf139d290f7c'
// point to eventPlaylistsROuter
// "/api/v1/events:eventId/playlists"
spotifySearchRouter.get('/', async (req, res) => {
  try{
    const spotifyApi = new SpotifyWebApi({
      clientId: '009470cfd6244ed9accb4456fff40697',
      clientSecret: 'c810f1d7564247c39797cf139d290f7c'
    })

    spotifyApi.clientCredentialsGrant().then(
      function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
    
        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);
      },
      function(err) {
        console.log('Something went wrong when retrieving an access token', err);
      }
    );

    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
      function(data) {
        console.log('Artist albums', data.body);
      },
      function(err) {
        console.error(err);
      }
    );
    return res.status(200).json({ events: events})
  } catch {
    return res.status(500).json({ errors: err})
  }
})

export default spotifySearchRouter