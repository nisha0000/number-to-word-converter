import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const StyledNumberDisplay = styled.div`
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


export const StyledResults = styled.div`
  display: flex;
  width: 70%;
  border: 1px solid red;
  height: 10em;
  overflow-y: auto;
  border-radius: 5px;
  padding: 1em;
`;

export const StyledConvertButton = styled.button<{disabled: boolean}>`
  display: flex;
  margin: 1em 0;
  padding: 0.5em 1em;
  background-color: ${(props): string => (props.disabled ? "darkgrey" : "grey")};
  border: 1px solid red;
  border-radius: 5px;
  color: ${(props): string => (props.disabled ? "lightblue" : "darkblue")};
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    cursor: ${(props): string => (props.disabled ? "default" : "pointer")};
    background-color: ${(props): string => (props.disabled ? "light-grey" : "darkgrey")};
  }
`;