import got from 'got'

class SpotifyClient {
  static async searchData(name, type) {
    try {
      const url = `https://api.spotify.com/v1/search?q=${name}&type=${type}&market=us`
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default SpotifyClient
