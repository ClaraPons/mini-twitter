import { API_KEY } from "@env"

const me = async (token) => {
    console.log(token)
    const request = await fetch(`https://zpydwdufeaornslpvwds.supabase.co/auth/v1/user`, {
        headers: {
            apikey:
            API_KEY,
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })

    const response = await request.json()
    return response
}

export default  me 
