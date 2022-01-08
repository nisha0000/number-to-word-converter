import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PhonePresentation } from "../../components/phone/phone-presentation";
import { convertNumbersToStringOptions } from "./actions";
import { numberAsStringOptionsSelector } from "./selectors";

export const Phone: React.FC = () => {
  const numberAsStringOptions = useSelector(numberAsStringOptionsSelector);
  const dispatch = useDispatch();

  const onConvert = (newValue: string) => {
    dispatch(convertNumbersToStringOptions(newValue))
  }
  return (<
    PhonePresentation
      stringOptions={numberAsStringOptions}
      onConvert={onConvert}
  />)
}