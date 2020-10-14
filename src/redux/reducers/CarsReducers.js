const initialState = {
  allCars: {
    loading: false,
    carsData: null,
    error: false,
    message: null,
  },
  carsModal: { loading: false, modalData: null, error: false, message: null },
};

const carsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_CAR_MAKE_PENDING":
      return {
        ...state,
        allCars: {
          loading: true,
          carsData: null,
          error: false,
          message: null,
        },
      };
    case "ALL_CAR_MAKE_SUCCESS":
      return {
        ...state,
        allCars: {
          loading: false,
          carsData: action.carsData,
          error: false,
          message: null,
        },
      };
    case "ALL_CAR_MAKE_FAILURE":
      return {
        ...state,
        allCars: {
          loading: false,
          carsData: null,
          error: true,
          message: action.message,
        },
      };
    case "CAR_MODEL_FETCH_PENDING":
      return {
        ...state,
        carsModal: {
          loading: true,
          modalData: null,
          error: false,
          message: null,
        },
      };
    case "CAR_MODEL_FETCH_SUCCESS":
      return {
        ...state,
        carsModal: {
          loading: false,
          modalData: action.modalData,
          error: false,
          message: null,
        },
      };
    case "CAR_MODEL_FETCH_FAILURE":
      return {
        ...state,
        carsModal: {
          loading: false,
          modalData: null,
          error: true,
          message: action.message,
        },
      };
    default:
      return { ...state };
  }
};

export default carsReducers;
