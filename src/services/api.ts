import client from "./axios"

export const singin = () => {
    return client.post('/signin')
}