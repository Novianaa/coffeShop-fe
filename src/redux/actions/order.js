import axios from "axios"
import cookies from "js-cookie";



const OrderRequest = () => {
  return {
    type: 'ORDER_REQUEST'
  }
}
const OrderSuccess = (data) => {
  return {
    type: 'ORDER_SUCCESS',
    payload: data
  }
}
const OrderError = (err) => {
  return {
    type: 'ORDER_ERROR',
    payload: err
  }
}

export const PostOrder = (formOrder) => {

  const token = cookies.get("token");
  console.log(formOrder)
  return async (dispatch) => {
    try {
      dispatch(OrderRequest())
      const result = await axios({
        method: 'POST',
        url: `novia-coffeeshop-be.vercel.app/api/v1/order`,
        headers: {
          authorization: `Bearer ${token}`
        },
        data: formOrder,
      })
      console.log(result, '12121')
      dispatch(OrderSuccess(result.data.data))
    }
    catch (err) {
      console.log(err, 'yuyu')
      dispatch(OrderError(err.response))
    }
  }
}