import apiCaller from './index'

export default function signupApi(userDetails) {
  return apiCaller('post', 'api/services/v1/auth/signup', { userDetails })
}
