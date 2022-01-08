import React from "react";
import _ from "lodash";
import { StyledButton, StyledButtonsWrapper, StyledKey, StyledKeypad, StyledKeysWrapper } from "./styled";
import { Key } from "./types";
import { KEYS } from "./constants";


type Props = {
  addDigit: (newDigit: string) => void;
  deleteDigit: () => void;
  clearDisplay: () => void;
}

const displayKey = (key: Key, index: number, addDigit: (newDigit: string) => void) => {
  return (
    <StyledKey key={`${key.digit}_${index}`} onClick={(e) => { addDigit(key.digit) }}>
      <div>
        {key.digit}
      </div>
      <div>
        {key.letters}
      </div>
    </StyledKey>
  )
}

export const Keypad: React.FC<Props> = (props) => {
  return (
  <StyledKeypad>
    <StyledKeysWrapper>
      {_.map(KEYS, (key, index) => displayKey(key, index, props.addDigit))}
    </StyledKeysWrapper>
    <StyledButtonsWrapper>
      <StyledButton onClick={(e) => { props.deleteDigit(); }}>Delete</StyledButton>
      <StyledButton onClick={(e) => { props.clearDisplay(); }}>Clear</StyledButton>
    </StyledButtonsWrapper>
  </StyledKeypad>
  )
}