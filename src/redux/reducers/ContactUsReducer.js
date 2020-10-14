const initialState = {
  loading: false,
  data: null,
  error: false,
  message: null,
};

const contactUsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CONTACT_US_FETCH_PENDING":
      return { ...state, login: { loading: true, data: null } };
    case "CONTACT_US_FETCH_SUCCESS":
      return {
        ...state,
        login: { loading: false },
      };
    case "CONTACT_US_FETCH_FAILURE":
      return {
        ...state,
        login: { loading: false, error: true, message: action.message },
      };
    default:
      return { ...state };
  }
};

export default contactUsReducers;
