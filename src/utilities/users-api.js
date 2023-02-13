const BASE_URL = "/api/users"

export async function signUp(userData) {
    const res = await fetch(BASE_URL, {
        // I want to make a user
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    // we get a true here when the status is 200
    if(res.ok) {
        return res.json()
    } else {
        throw new Error('Invalid Sign Up')
    }
}