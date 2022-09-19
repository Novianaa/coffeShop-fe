const initialState = {
  loading: false,
  data: {
    result: [],
  },
  error: null
}


const Fetch = (state = initialState, action = {}) => {
  switch (action.type) {
    case "PRODUCT_REQUEST":
      return { ...state, loading: true }
    case "PRODUCT_ERROR":
      return { ...state, loading: false, data: state.data, error: action.payload }
    case "GET_PRODUCT_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}


export default Fetch