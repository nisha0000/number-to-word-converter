import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.5em;
  font-weight: 600;
  padding: 0.5em 0;
  align-items: center;
`;

export const HeaderPresentation: React.FC = () => {

  return (
  <StyledHeader>
    PhoneWords Predictive Text
  </StyledHeader>
  )
}