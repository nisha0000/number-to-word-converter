import _ from "lodash";
import React, { useState } from "react";
import { Keypad } from "./keypad/keypad";
import { StyledConvertButton, StyledNumberDisplay, StyledResults, StyledWrapper } from "./styled";


type Props = {
  stringOptions: string[];
  onConvert: (newValue: string) => void;
}

const formatStringOptions = (options: string[]) => {
  return _.join(options, ", ");
}

export const PhonePresentation: React.FC<Props> = (props) => {
  const [numbersToConvert, setNumbersToConvert] = useState<string>("");

  const setNumbers = (newDigit: string) => {
    const newValue = numbersToConvert.concat(newDigit);
    setNumbersToConvert(newValue)
  }

  const deleteDigit = () => {
    const newValue = numbersToConvert.slice(0, -1);
    setNumbersToConvert(newValue)
  }

  const clearNumbers = () => {
    setNumbersToConvert("")
  }

  return (
  <StyledWrapper>
    <StyledNumberDisplay>
      {numbersToConvert}
    </StyledNumberDisplay>
    <Keypad 
      deleteDigit={deleteDigit}
      clearDisplay={clearNumbers}
      addDigit={setNumbers}
    />
    <StyledConvertButton 
      onClick={(e) => { props.onConvert(numbersToConvert); }}
      disabled={numbersToConvert.length === 0 }
    >
      Convert!
    </StyledConvertButton>
    <StyledResults>{formatStringOptions(props.stringOptions)}</StyledResults>
  </StyledWrapper>)
}