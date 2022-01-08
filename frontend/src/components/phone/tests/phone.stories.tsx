import _ from "lodash";
import { PhonePresentation } from "..";

export default {
  title: "Phone",
};

export const NoOptions = (): JSX.Element => {
  
  return(
  <PhonePresentation 
    stringOptions={[]}
    onConvert={_.noop}
  />
)};

export const WithOptions = (): JSX.Element => {
  
  return(
  <PhonePresentation 
    stringOptions={["a", "n", "adgad", "adngdhnlksan", "ad", "andglk"]}
    onConvert={_.noop}
  />
)};

  