import _ from "lodash";
import { Keypad } from "..";

export default {
  title: "KeyPad",
};

export const NoOptions = (): JSX.Element => {
  
  return(
  <Keypad 
    addDigit={_.noop}
    deleteDigit={_.noop}
    clearDisplay={_.noop}
  />
)};

export const WithOptions = (): JSX.Element => {
  
  return(
  <Keypad 
    addDigit={_.noop}
    deleteDigit={_.noop}
    clearDisplay={_.noop}
  />
)};

  