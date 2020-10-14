import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { authReducers, contactUsReducers, carsReducers } from "./reducers";

const rootReducer = combineReducers({
  authReducers,
  contactUsReducers,
  carsReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
