import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  height: 70%;
`

export const TextWrapper = styled.div`
  margin-bottom: 15px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`


export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`

export const ResetButton = styled.button`
  background-color: red;
  border-radius: none;
  width: 65px;
  height: 27px;
  color: white;
`

export const SendButton = styled.button`
  background-color: green;
  border-radius: none;
  width: 65px;
  height: 27px;
  color: white;
`