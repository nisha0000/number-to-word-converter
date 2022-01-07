import styled from "styled-components";

export const StyledKey = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  border-radius: 5px;
  padding: 0.5em;
  margin: 1em;
  align-items: center;
  width: 4em;
  background-color: grey;
  color: darkblue;

  div:nth-child(1) {
    font-size: 2rem;
    padding-right: 0.25em;
  }

  div:nth-child(2) {
    font-size: 1rem;
  }

  &:hover {
    cursor: pointer;
    background-color: darkgrey;
  }
`;

export const StyledKeypad = styled.div`
  width: 25em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: darkblue;
`;