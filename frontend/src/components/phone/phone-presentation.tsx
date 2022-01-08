import _ from "lodash";
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
  height: 2em;
  width: 15em;
  border: 1px solid red;
  border-radius: 5px;
  margin: 1em 0;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 600;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0.25em; 
`;


const StyledResults = styled.div`
  display: flex;
  width: 70%;
  border: 1px solid red;
  height: 10em;
  overflow-y: auto;
  border-radius: 5px;
  padding: 1em;
`;

export const StyledConvertButton = styled.button`
  display: flex;
  margin: 1em 0;

  &:hover {
    cursor: pointer;
  }
`;

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
    <StyledConvertButton onClick={(e) => { props.onConvert(numbersToConvert); }}>Convert!</StyledConvertButton>
    <StyledResults>{formatStringOptions(props.stringOptions)}</StyledResults>
  </StyledWrapper>)
}