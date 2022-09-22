import React from "react";

import { StyledInput } from './styles.tsx';

type InputProps = {
  value: string;
  onchange(): void;
}

const Input = ({ value, onchange }: InputProps) => {
    return (
      <StyledInput value={value} onChange={onchange} />
    );
};

export default Input;
