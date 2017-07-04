import apiCaller from './index'

export default function signinApi(userDetails) {
  console.log(userDetails, 'signinApi');
  return apiCaller('post', 'api/services/v1/auth/signin', userDetails)
}
