import axios from "axios"
import cookies from "js-cookie";



const ProductRequest = () => {
  return {
    type: 'PRODUCT_REQUEST'
  }
}
const GetProductSuccess = (data) => {
  return {
    type: 'GET_PRODUCT_SUCCESS',
    payload: data
  }
}
const ProductError = (err) => {
  return {
    type: 'PRODUCT_ERROR',
    payload: err
  }
}

export const GetProducts = (category_id = 'coffee') => {
  const token = cookies.get("token");
  return async (dispatch) => {
    try {
      dispatch(ProductRequest())
      const result = await axios({
        method: 'GET',
        url: `https://novia-coffeeshop-be.vercel.app/api/v1/product/${category_id}`,
        headers: {
          authorization: `Bearer ${token}`
        },
      })
      // console.log(result, '12121')
      dispatch(GetProductSuccess(result.data.data))
    }
    catch (err) {
      console.log(err, 'yuyu')
      dispatch(ProductError(err.response))
    }
  }
}
export const GetDetailsProduct = (slug) => {
  const token = cookies.get("token");
  return async (dispatch) => {
    try {
      dispatch(ProductRequest())
      const result = await axios({
        method: 'GET',
        url: `https://novia-coffeeshop-be.vercel.app/api/v1/product/detail/${slug}`,
        headers: {
          authorization: `Bearer ${token}`
        },
      })
      dispatch(GetProductSuccess(result.data.data))
    }
    catch (err) {
      console.log(err)
      dispatch(ProductError(err.response))
    }
  }
}
