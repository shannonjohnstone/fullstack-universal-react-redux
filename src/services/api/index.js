import axios from 'axios'

const apiCaller = async (method = 'get', url) => {
  try {
    const results = await axios({ method, url })
    return results
  } catch (e) {
    console.log(e, 'apiCaller error') // eslint-disable-line
  }
}

export default apiCaller
