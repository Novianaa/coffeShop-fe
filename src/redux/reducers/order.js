const initialState = {
  loading: false,
  data: {
    result: [],
  },
  error: null
}


const Order = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ORDER_REQUEST":
      return { ...state, loading: true }
    case "ORDER_ERROR":
      return { ...state, loading: false, data: state.data, error: action.payload }
    case "ORDER_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}


export default Order