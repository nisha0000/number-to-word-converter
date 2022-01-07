import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  color: black;
  height: 100%;
`;

export const PagePresentation: React.FC<{}> = (props) => {
  return <StyledPage>{props.children}</StyledPage>
}