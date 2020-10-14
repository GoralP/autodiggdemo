import axios from "axios";
import { toast } from "react-toastify";
import { config, errorHandle } from "../../common";

export const login = (data, history) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_FETCH_PENDING" });
    axios
      .post(`${config.apiUrl}/test/login`, data)
      .then((res) => {
        dispatch({
          type: "LOGIN_FETCH_SUCCESS",
        });
        toast.success(res.data.message);
        history.push("/");
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FETCH_FAILURE", message: error.message });
        errorHandle(error);
      });
  };
};

export const registration = (data) => {
  return (dispatch) => {
    dispatch({ type: "REGISTRATION_FETCH_PENDING" });
    axios
      .post(`${config.apiUrl}/test/register`, data)
      .then((res) => {
        dispatch({
          type: "REGISTRATION_FETCH_SUCCESS",
        });
        toast.success(res.data.message);
      })
      .catch((error) => {
        dispatch({
          type: "REGISTRATION_FETCH_FAILURE",
          message: error.message,
        });
        errorHandle(error);
      });
  };
};
