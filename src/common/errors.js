import { toast } from "react-toastify";

const errorHandle = (error) => {
  for (const data in error.response.data.message) {
    toast.error(error.response.data.message[data]);
  }
};

export default errorHandle;
