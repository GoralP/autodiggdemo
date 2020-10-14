import axios from "axios";
import { config } from "../../common";

export const carMake = () => {
  return (dispatch) => {
    dispatch({ type: "ALL_CAR_MAKE_PENDING" });
    axios
      .get(`${config.apiUrl}/test/carMake`)
      .then((res) => {
        dispatch({ type: "ALL_CAR_MAKE_SUCCESS", carsData: res.data });
        
      })
      .catch((error) => {
        dispatch({ type: "ALL_CAR_MAKE_FAILURE", message: error.message });
      });
  };
};

export const carModel = (id) => {
  return (dispatch) => {
    dispatch({ type: "CAR_MODEL_FETCH_PENDING" });
    axios
      .get(`${config.apiUrl}/test/carModel/${id}`)
      .then((res) => {
        dispatch({ type: "CAR_MODEL_FETCH_SUCCESS", modalData: res.data });
      })
      .catch((error) => {
        dispatch({ type: "CAR_MODEL_FETCH_FAILURE", message: error.message });
      });
  };
};
