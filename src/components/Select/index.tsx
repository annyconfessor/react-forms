import { StyledSelect } from "./styles"

import { SelectProps } from "./types"

import { data } from './mockData'

const Select = ({ onChange }: SelectProps) => {

  return(
    <StyledSelect onChange={onChange}>
      {data?.map((item, index) => <option key={index}>{item.option}</option>)}
    </StyledSelect>
  )
}

export default Select