import { convertNumbersToString } from "../../api";
import { ThunkDispatch } from "../store/types";
import { CONVERSION_SUCCESS } from "./action-types";


export const convertNumbersToStringOptions = (numbers: string) => async (dispatch: ThunkDispatch): Promise<void> => {
  try {
    const result = await convertNumbersToString(numbers);
    dispatch({
      type: CONVERSION_SUCCESS,
      payload: { stringOptions: result.data.possibleWords }
    })
  }
  catch {
    // TODO: error handling
    console.log("could not convert data");
  }  
}