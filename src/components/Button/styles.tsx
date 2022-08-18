import styled,  { css } from 'styled-components'

import {
    variant,
  } from 'styled-system'

export const StyledButton = styled.button`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid #f5f5f5;
    border-radius: 10%;
    width: 60px;
    height: 30px;
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