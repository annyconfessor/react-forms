import { StyledInput } from './styles';

type InputProps = {
  value?: (e: any) => void
  onchange: (e: any) => void;
  id: string
}

const Input = ({ value, onchange, id }: InputProps) => {
    return (
      <StyledInput value={value} onChange={onchange} id={id} />
    );
};

export default Input;
