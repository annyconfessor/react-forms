import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import {
  variant,
} from 'styled-system'
export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'reset' | 'send'
}

const StyledButton = styled.button<Omit<ButtonProps, 'color'>>`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid #f5f5f5;
    ${variant({
      variants: {
        reset: {
          color: 'white',
          bg: 'red'
        },
        send: {
          color: 'white',
          bg: 'black'
        }
      }
    })}
  `}
`

const Button: FC<ButtonProps> = (props) => {
  const { variant = 'reset', ...rest } = props

  return (
    <StyledButton variant={variant} {...rest}>
      {props.children}
    </StyledButton>
  )
}

export default Button