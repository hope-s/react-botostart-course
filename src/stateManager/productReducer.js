const initialValue = {
  allItems: [],
  loading: true,
  error: ""
};

const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "REQUEST_DATA":
    return {
      ...state,
      loading: true,
    }
    case "FETCH_DATA_SECCESS":
    return {
      ...state,
      loading: false,
      allItems: action.payload,
    }
    case "FETCH_DATA_FILED": 
    return {
      ...state,
      loading: false,
      error: action.payload,
    }
    default:
      return state;
  }
};
export default productReducer;