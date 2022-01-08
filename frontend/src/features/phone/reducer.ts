import { ConversionSuccessfulAction, CONVERSION_SUCCESS } from "./action-types";

export type State = {
  numberAsStrings: string[];
}

const initialState: State = {
  numberAsStrings: []
}

type Actions = ConversionSuccessfulAction;


export const reducer = (state: State = initialState, action: Actions): State => {
  switch(action.type) {
    case CONVERSION_SUCCESS:
      return {
        ...state,
        numberAsStrings: action.payload.stringOptions
      };
    default:
      return state;
  }
}