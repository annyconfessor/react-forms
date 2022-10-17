import React, { FC } from 'react'

import { StyledButton } from './styles'

import { ButtonProps } from './types'

const Button: FC<ButtonProps> = (props) => {
  const { variant, ...rest } = props

  return (
    <StyledButton variant={variant} {...rest}>
      {props.children}
    </StyledButton>
  )
}

export default Button