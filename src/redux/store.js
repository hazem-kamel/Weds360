import React from "react";
import { createStore, applyMiddleware } from "redux";
import rootReducer from './RootReducer'

const store = createStore(rootReducer, applyMiddleware());

export default store;