export default function (userDetails) {
  console.log(userDetails, 'userDetails');
  return {
    type: 'SIGNIN_SIGNOUT',
    paylaod: userDetails
  }
}
