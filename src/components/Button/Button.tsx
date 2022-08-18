import React, { FC } from 'react'

import { StyledButton } from './styles.tsx'

import ButtonProps from './types.ts'

const Button: FC<ButtonProps> = (props) => {
  const { variant, ...rest } = props

  return (
    <StyledButton variant={variant} {...rest}>
      {props.children}
    </StyledButton>
  )
}

export default Button