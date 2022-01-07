import React, { useState } from "react";
import styled from "styled-components";
import { Keypad } from "./keypad/keypad";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const StyledNumberDisplay = styled.div`
  display: flex;
  height: 3em;
  width: 15em;
  border: 1px solid red;
  border-radius: 5px;
  margin: 1em 0;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 600;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0.25em; 
`;


const StyledResults = styled.div``;

export const PhonePresentation: React.FC = () => {
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
    <StyledResults>results</StyledResults>
  </StyledWrapper>)
}