import React from "react";
import _ from "lodash";
import { StyledKey, StyledKeypad } from "./styled";
import { Key } from "./types";
import { KEYS } from "./constants";


type Props = {}

const displayKey = (key: Key) => {
  return (
    <StyledKey>
      <div>
        {key.digit}
      </div>
      <div>
        {key.letters}
      </div>
    </StyledKey>
  )
}

export const Keypad: React.FC<Props> = () => {
  return (
  <StyledKeypad>
    {_.map(KEYS, (key) => displayKey(key))}
  </StyledKeypad>
  )
}