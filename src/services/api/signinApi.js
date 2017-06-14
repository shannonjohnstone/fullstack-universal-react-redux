import apiCaller from './index'

export default function signinApi(userDetails) {
  return apiCaller('post', 'api/services/v1/auth/signin', { userDetails })
}
