/* eslint-disable */
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from "../Redux/Reducer";
import * as types from '../Redux/Actions/constant';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native'
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const persistConfig = {
  key: 'root',
  keyPrefix: '',
  storage: AsyncStorage, 
 };

 const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT_SUCCESS) {
   
      state = {}
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  ...reducers
});
const pReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};

const composedEnhancers = compose(
  applyMiddleware(...middleware)
);

const stores = createStore(
  pReducer,
  initialState,
  composedEnhancers
);
export const store = stores;
export const persistor = persistStore(store);

