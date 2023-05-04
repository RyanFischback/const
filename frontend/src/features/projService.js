import axios from 'axios'

const API_URL = '/api/projects/'

const display = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

const projService = {
    display
}

export default projService