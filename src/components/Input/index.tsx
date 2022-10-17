import { StyledInput } from './styles';

type InputProps = {
  value?: (e: any) => void
  onChange: (e: any) => void;
  id: number | string
}

const Input = ({ value, onChange, id }: InputProps) => (
  <StyledInput value={value} onChange={onChange} id={id} />
);

export default Input;
