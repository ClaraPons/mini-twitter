import { API_KEY } from "@env"

const signup = async () => {
    const request = await fetch(
      'https://zpydwdufeaornslpvwds.supabase.co/auth/v1/signup',
      {
        method: 'POST',
        headers: {
          apikey:
          API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }
    )

    const response = await request.json()
    return response
  }


  const login = async (email, password) => {
    const request = await fetch(
      'https://zpydwdufeaornslpvwds.supabase.co/auth/v1/token?grant_type=password',
      {
        method: 'POST',
        headers: {
          apikey:
          API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }
    )

    const response = await request.json()
    return response
}

  export { login, signup }