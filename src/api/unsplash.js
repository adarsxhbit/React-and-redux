import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2ictJs3ACDuAUa3RS725cPuroEcUFRaE7ZRbaoPz2ok'
    }
    
})