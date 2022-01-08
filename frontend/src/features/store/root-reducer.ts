
import { combineReducers } from "redux";
import { RootReducerType } from "./types";
import { reducerName as conversionReducerName, reducer as conversionReducer } from "../phone"

export const getRootReducer = () => {
  return {
    [conversionReducerName]: conversionReducer,
  }
}


export const rootReducer = getRootReducer();
export const combinedRootReducer = combineReducers(rootReducer);

export type RootReducer = RootReducerType<typeof rootReducer>;
export type GetStore = () => RootReducer;