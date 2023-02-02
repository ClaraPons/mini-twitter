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


  const createTweet = async (title, content, id, token) => {
    const request = await fetch(
      'https://zpydwdufeaornslpvwds.supabase.co/rest/v1/tweets',
      {
        method: 'POST',
        headers: {
          apikey:
          API_KEY,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ title: title, content: content, user_id: id })
      }
    )

    const response = await request.json()
    return response
}

  export {getAlltweet, createTweet }
