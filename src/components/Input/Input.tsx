import React from "react";

import { StyledInput } from './styles.tsx';

type InputProps = {
  name: string,
  lastName: string,
  email: string,
  region: string,
  text?: string,
}

const Input = ({ name, lastName, email, region, text }: InputProps) => {
    return (
      <StyledInput name={name} lastName={lastName} email={email} region={region} text={text} />
    );
};

export default Input;
