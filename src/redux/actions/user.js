import axios from "axios"
import cookies from "js-cookie";

const UserRequest = () => {
  return {
    type: 'USER_REQUEST'
  }
}
const GetUserSuccess = (data) => {
  return {
    type: 'GET_USER_SUCCESS',
    payload: data
  }
}
const UserError = (err) => {
  return {
    type: 'USER_ERROR',
    payload: err
  }
}

export const GetUser = (email = '') => async (dispatch) => {
  const token = cookies.get("token")
  email = cookies.get("email")
  // return  => {
  try {
    dispatch(UserRequest())
    const result = await axios({
      method: 'GET',
      url: `https://novia-coffeeshop-be.vercel.app/api/v1/user/${email}`,
      headers: {
        authorization: `Bearer ${token}`
      },
    })
    console.log(result, '12121')
    console.log(`https://novia-coffeeshop-be.vercel.app/api/v1/user/${email}`)
    dispatch(GetUserSuccess(result.data.data))
  }
  catch (err) {
    console.log(err, 'yuyu')
    dispatch(UserError(serr.response))
  }
  // }
}