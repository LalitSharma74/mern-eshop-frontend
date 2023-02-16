import { configureStore } from "@reduxjs/toolkit";

import {
  productReducer,
  productDetailsReducer,
} from "./reducers/productReducer";

import logger from "redux-logger";

const reducer = {
  products: productReducer,
  productDetails: productDetailsReducer,
};

let initialState = {};

const store = configureStore({
  reducer,
  initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
