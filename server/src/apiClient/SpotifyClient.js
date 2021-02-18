import { query } from 'express'
import got from 'got'

class SpotifyClient {
  static get baseUrl(){
    return "https://api.spotify.com"
  }

  static async searchTracks(query){
    const baseUrl = this.constructor.baseUrl
    const queryPath = '/v1/search'

    const trackResponse = await got.get(`${baseUrl}${queryPath}`, {
      searchParams: query,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SPOTIFY_KEY}`
      }
    })

    const parsedTracksResponse = parseResponse(tracksResponse)
    const serializedTracksResponse = serializeTracksResponse(parsedTracksResponse)
  }

  parseResponse(response){
    const responseBody = response.body
    return JSON.parse(responseBody) 
  }

  serializeTracksResponse(parsedTracksResponse){
    const serializedTracks = parsedTracksResponse.tracks.items.map((track) => {
      const name = track.name
      const spotifyId = track.id
      const album = track.album.name
      const spotifyAlbumId = track.album.id
      const albumArt = track.album.images[0].url
      const apiUrl = track.href
      const externalUrl = track.external_urls.spotify
      const duration = track.duration_ms
      const artist = tracks.artists[0].name
      const artistId = track.artists[0].id

      return ({
        name, spotifyId, album, spotifyAlbumId, albumArt, apiUrl, externalUrl, duration, artist, artistId
      })
    })

    return serializedTracks
  }
}

export default SpotifyClient
