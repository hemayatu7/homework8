const hotelReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_HOTEL":
      return {
        ...state,
        hotel: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default hotelReducer;
