export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'reset' | 'send'
}