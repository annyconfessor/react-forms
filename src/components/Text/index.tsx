import { StyledText } from "./styles";

type TextProps = {
  children: string
  name: string
}

const Text = ({children, name}: TextProps) => {
  return(
    <StyledText className={`${name}`}>{children}</StyledText>
  )
}

export default Text