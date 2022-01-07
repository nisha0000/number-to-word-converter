
import { combineReducers } from "redux";
import { RootReducerType } from "./types";
// import { reducerName as mainSearchReducerName, reducer as mainSearchReducer } from "../character-display"
// import { reducerName as singleCharacterReducerName, reducer as singleCharacterReducer } from "../single-character-page"
// import { reducerName as paginationReducerName, reducer as paginationReducer } from "../pagination"

const reducer = (state: string, action: {type: "red"}): string => {
  return "hello"
}


export const getRootReducer = () => {
  return {
    one: reducer,
    // [paginationReducerName]: paginationReducer,
    // [singleCharacterReducerName]: singleCharacterReducer,
  }
}


export const rootReducer = getRootReducer();
export const combinedRootReducer = combineReducers(rootReducer);

export type RootReducer = RootReducerType<typeof rootReducer>;
export type GetStore = () => RootReducer;