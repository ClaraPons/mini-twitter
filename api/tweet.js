import { API_KEY } from "@env"

const getAlltweet = async (token) => {
    const request = await fetch(
      'https://zpydwdufeaornslpvwds.supabase.co/rest/v1/tweets?select=*',
      { 
        headers: {
          apikey:
          API_KEY,
          Authorization: `Bearer ${token}`
        }
      }
    )

    const response = await request.json()
    // console.log(response)
    return response
  }

  export default getAlltweet 
