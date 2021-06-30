import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import Dic from "./module/DicContext";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ Dic });
const store = createStore(
  rootReducer,
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
