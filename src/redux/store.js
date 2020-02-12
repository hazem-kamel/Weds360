import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './RootReducer'
import {watchFetchImages} from '../middleware/saga';
import thunk from 'redux-thunk'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk,sagaMiddleware)
  );
  sagaMiddleware.run(watchFetchImages);
export default store;

