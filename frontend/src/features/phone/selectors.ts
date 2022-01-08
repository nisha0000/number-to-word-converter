import { State } from "./reducer";
import { reducerName as conversionSlice } from "./constants";
import { createSelector } from "reselect";
import { RootReducer } from "../store/root-reducer";

export const getState = (store: RootReducer): State => store[conversionSlice];
export const numberAsStringOptionsSelector = createSelector([getState], (state) => state.numberAsStrings);
