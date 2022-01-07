import {
  applyMiddleware, createStore, compose,
} from "redux";
// import thunkMiddleware from "redux-thunk";
// import {  } from "connected-react-router";
import { combinedRootReducer } from "./root-reducer";


export interface StoreConfig {
  store: any;
}

export const configureStore = (): StoreConfig => {
  // const middlewares = [thunkMiddleware, routerMiddleware(browserHistory)];
  // const middlewareEnhancer = applyMiddleware(...middlewares);

  // const enhancers = [middlewareEnhancer];
  // const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combinedRootReducer,
    {},
    // composeEnhancers(
    //   ...enhancers
    // )
  )
  return { store }
}