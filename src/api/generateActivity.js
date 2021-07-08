import axios from 'axios'

const API_ENDPOINT = 'https://www.boredapi.com/api/activity/'

const generateActivity = async (callback) => {
  try {
    const response = await axios.get(API_ENDPOINT)
    callback(null, response.data)
  } catch(e) {
    callback(e, null)
  }
}

export default generateActivity
