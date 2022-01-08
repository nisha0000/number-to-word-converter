import { ConversionSuccessfulAction, CONVERSION_SUCCESS } from "../action-types";
import { reducer, State } from "../reducer"

describe("conversion reducer dispatchs correct result", () => {
  it("when no previous result", () => {
    const initialState: State = {
      numberAsStrings: []
    }
    const action: ConversionSuccessfulAction = {
      type: CONVERSION_SUCCESS,
      payload: {stringOptions: ["a", "b", "b", "c"]}
    };
    const result = reducer(initialState, action);
    const expected = ["a", "b", "b", "c"]
    expect(result.numberAsStrings).toEqual(expected);
  });

  it("when previous result exists", () => {
    const initialState: State = {
      numberAsStrings: ["a", "b", "b", "c"]
    }
    const action: ConversionSuccessfulAction = {
      type: CONVERSION_SUCCESS,
      payload: {stringOptions: ["x", "s", "y", "x"]}
    };
    const result = reducer(initialState, action);
    const expected =["x", "s", "y", "x"];
    expect(result.numberAsStrings).toEqual(expected);
  });
})