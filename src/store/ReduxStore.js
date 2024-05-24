import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { reducers } from "../redux/reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

/**
//  * reducers: reducer xử lý là một function dùng để cập nhật lại state,
//  * initValue: giá trị khởi tạo,
//  * enhancers: middleWare phổ biến như redux-saga hay redux-thunk
//  * Lúc mình sử dụng @reduxjs/toolkit thì reducer không cần sử dụng combineReducer nữa mà viết trực tiếp vào store luôn
//  * */
