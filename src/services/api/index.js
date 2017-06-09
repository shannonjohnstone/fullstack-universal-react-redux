import axios from 'axios'

const apiCaller = async (method = 'get', url, data = {}) => {
  try {
    const results = await axios({ method, url, data })
    return results
  } catch (e) {
    console.log(e, 'apiCaller error') // eslint-disable-line
  }
}

export default apiCaller
