import axios from 'axios'

const API_URL = '/api/projects/'

const display = async () => {
    console.log("awaiting axios get projects service")
    const response = await axios.get(API_URL)
    console.log(response.data[0])
    return response.data
}

const projService = {
    display
}

export default projService