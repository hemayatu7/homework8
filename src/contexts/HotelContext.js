import { createContext, useReducer } from "react";
import hotelReducer from "../reducers/HotelReducer";
import axios from "axios";

const initialState = {
  loading: true,
  hotel: [],
  error: null,
};

export const HotelContext = createContext();

const HotelContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hotelReducer, initialState);
  //get all hotel
  async function getHotel() {
    const res = await axios.get(
      "https://enigmatic-shelf-67645.herokuapp.com/api/v2/hotel"
    );
    try {
      dispatch({
        type: "GET_ALL_HOTEL",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <HotelContext.Provider value={{ getHotel, hotel: state.hotel }}>
      {" "}
      {children}
    </HotelContext.Provider>
  );
};

export default HotelContextProvider;
