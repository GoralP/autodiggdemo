import axios from "axios";
import { toast } from "react-toastify";
import { config, errorHandle } from "../../common";

export const contactUs = (data) => {
  return (dispatch) => {
    dispatch({ type: "CONTACT_US_FETCH_PENDING" });
    axios
      .post(`${config.apiUrl}/test/contactUs`, data)
      .then((res) => {
        dispatch({
          type: "CONTACT_US_FETCH_SUCCESS",
        });
        toast.success(res.data.message);
      })
      .catch((error) => {
        dispatch({ type: "CONTACT_US_FETCH_FAILURE", message: error.message });
        errorHandle(error);
      });
  };
};
