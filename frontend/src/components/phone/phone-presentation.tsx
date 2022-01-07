import React from "react";
import styled from "styled-components";
import { Keypad } from "./keypad/keypad";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const StyledNumberDisplay = styled.div``;
const StyledResults = styled.div``;

export const PhonePresentation: React.FC = () => {

  return (
  <StyledWrapper>
    <StyledNumberDisplay>
    current numbers
    </StyledNumberDisplay>
    <Keypad></Keypad>
    <StyledResults>results</StyledResults>
  </StyledWrapper>)
}

// wrapper

// display the numbers ty

//end warpper